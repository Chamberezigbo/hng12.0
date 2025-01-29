# Hire Node.js Developers API

This API provides details about hiring a Node.js developer, including an email contact, the current datetime in ISO 8601 format (UTC), and a GitHub repository URL.

## Base URL

```
http://localhost:3000
```

## Endpoints

### 1. Get Developer Contact Information

**Endpoint:**

```
GET /hire/nodejs-developers
```

**Request:**

- No parameters required.

**Response:**

```json
{
  "email": "chamberezigbo@gmail.com",
  "current_datetime": "2025-01-29T12:34:56.789Z",
  "github_url": "https://github.com/Chamberezigbo/hng12.0"
}
```

## Installation and Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Chamberezigbo/hng12.0
   cd your-repo
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the server:

   ```sh
   node server.js
   ```

4. The server will be running on:

   ```
   http://localhost:3000
   ```

## Dependencies

- Express.js
- CORS

## Notes

- The `current_datetime` field is dynamically generated in UTC format.
- Make sure to replace the GitHub URL with the actual repository link.

## Author

Chamberlain Ezigbo
