const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();

app.use(cors());

// function to get prime numbers //
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPerfect(num) {
  let sum = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num && num !== 1;
}

// get is Armstrong number //
function isArmstrong(num) {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
}

// Stage One Task //
app.get("/hire/nodejs-developers", (req, res) => {
  const current_datetime = new Date().toISOString(); //to get current datetime

  res.status(200).json({
    email: "chamberezigbo@gmail.com",
    current_datetime,
    github_url: "https://github.com/Chamberezigbo/hng12.0",
  });
});

// Stage Two Task //
app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);
  const properties = [];
  if (num % 2 !== 0) properties.push("odd");
  if (num % 2 === 0) properties.push("even");
  if (isPrime(num)) properties.push("prime");
  if (isPerfect(num)) properties.push("perfect");
  if (isArmstrong(num)) properties.push("armstrong");

  const digitSum = num
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  try {
    const funFactResponse = await axios.get(`http://numbersapi.com/${num}`);
    const funFact = funFactResponse.data;

    return res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error fetching fun fact" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
