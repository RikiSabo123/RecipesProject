# Recipes REST API

A RESTful API for managing recipes, built with **Node.js, Express 5 and MongoDB (Mongoose)**, with **JWT-protected write endpoints**.

## Features

- Full CRUD for recipes
- Filter recipes by category
- JWT authentication – reading is public, creating / updating / deleting requires a token
- Input validation and a central error handler (invalid IDs → `400`, missing recipe → `404`)
- MVC structure: routes → controllers → models, with separate middleware

## Tech Stack

Node.js · Express 5 · MongoDB · Mongoose · JSON Web Tokens · dotenv

## Project Structure

```
app.js                  # App setup, routes, error handler, DB connection
config/db.js            # MongoDB connection
models/                 # Mongoose schemas (Recipe, User)
controllers/            # Request handlers
routes/                 # /recipes and /users routers
middleware/             # JWT verification, error handling
```

## Getting Started

```bash
npm install
cp .env.example .env    # then fill in your values
npm start               # or: npm run dev (auto-reload)
```

| Variable | Description |
| --- | --- |
| `DATABASE_URI` | MongoDB connection string |
| `ACCESS_TOKEN_SECRET` | Secret used to sign JWTs |
| `PORT` | Server port (default `3000`) |

## API

### Auth

| Method | Endpoint | Body | Returns |
| --- | --- | --- | --- |
| POST | `/users/login` | `{ "id", "firstName", "lastName" }` | `{ "accessToken" }` (valid for 1 hour) |

Send the token on protected requests as `Authorization: Bearer <token>`.

### Recipes

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| GET | `/recipes` | – | All recipes (optional `?category=...`) |
| GET | `/recipes/:id` | – | One recipe |
| POST | `/recipes` | ✔ | Create a recipe |
| PUT | `/recipes/:id` | ✔ | Update a recipe |
| DELETE | `/recipes/:id` | ✔ | Delete a recipe |

Recipe shape:

```json
{
  "name": "Lentil soup",
  "time": 40,
  "ingredients": ["lentils", "onion", "carrot"],
  "category": "soups",
  "isFavorite": false
}
```
