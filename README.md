# Notes Vue

A full-stack note-taking application built with **Vue 3**, **Express 5**, and **MongoDB**.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vue 3, Vite 7, Tailwind CSS 4, Axios |
| **Backend** | Node.js, Express 5, Mongoose 9 |
| **Database** | MongoDB |
| **DevOps** | Docker, Docker Compose |

## Architecture

```
┌─────────────┐     HTTP      ┌──────────────┐     Mongoose     ┌──────────┐
│  Vue 3 SPA  │ ────────────> │  Express API  │ ──────────────> │ MongoDB  │
│  (Vite 7)   │ <──────────── │  (Port 3000)  │ <────────────── │ (27017)  │
└─────────────┘     JSON      └──────────────┘                  └──────────┘
```

- **Client:** Single-page application built with Vue 3 Composition API, styled with Tailwind CSS, and bundled with Vite.
- **API:** RESTful Express server with Mongoose ODM for MongoDB persistence.
- **Database:** MongoDB with auto-incrementing integer IDs via `mongoose-sequence`.

## Project Structure

```
notes-vue/
├── api/                    # Express backend
│   ├── src/
│   │   ├── server.js       # Server entry point & routes
│   │   └── models/
│   │       └── note.js     # Mongoose schema & model
│   └── package.json
├── client/                 # Vue 3 frontend
│   ├── src/
│   │   ├── App.vue         # Root component
│   │   ├── main.js         # App bootstrap
│   │   ├── api.js          # Axios client config
│   │   ├── style.css       # Global styles
│   │   ├── assets/         # CSS & static assets
│   │   └── components/
│   │       ├── Edit.vue    # New note form
│   │       ├── Notes.vue   # Note list
│   │       └── Search.vue  # Search bar
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── docker-compose.yml      # Orchestrates API + MongoDB
├── Dockerfile              # API container build
├── .env                    # Environment variables
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/getNotes` | Returns all notes |
| `POST` | `/api/saveNote` | Creates a new note (`{ "note": "..." }`) |
| `GET` | `/` | Health check |

## Getting Started

### Prerequisites

- Node.js >= 20
- MongoDB (local or Docker)
- npm

### Local Development

**1. Start the API server:**
```sh
cd api
npm install
npm start
```

**2. Start the client dev server:**
```sh
cd client
npm install
npm run dev
```

The client runs at `http://localhost:5173` and the API at `http://localhost:8080`.

### Docker (Production-like)

```sh
docker compose up --build
```

This starts MongoDB and the API server. The API is available at `http://localhost:3000`.

### Production Build

```sh
cd client
npm run build
```

Output goes to `client/dist/`.

## Environment Variables

| Variable | Default                       | Description |
|----------|-------------------------------|-------------|
| `MONGO_URI` | `mongodb://mongo:27017/notes` | MongoDB connection string |
| `PORT` | `8080`                        | API server port |

## Data Model

```
{
  id:    Number  (auto-increment)
  note:  String  (required)
  date:  Date    (default: now)
}
```
