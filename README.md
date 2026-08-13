# 🍽️ Dine Hub — Restaurant Listing Platform

A full-stack Restaurant Listing Platform built as part of a software engineering assignment. It allows users to view, add, update, and delete restaurants through a clean and responsive web interface.

**Live Demo:** [dine-hub-eight.vercel.app](https://dine-hub-eight.vercel.app)  
**Backend API:** [dinehub-pc0z.onrender.com](https://dinehub-pc0z.onrender.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, TypeScript |
| UI Library | Material UI (MUI) v9 |
| HTTP Client | Axios |
| Routing | React Router v7 |
| Backend | Node.js, Express v5, TypeScript |
| ORM | Sequelize v6 |
| Database | MySQL (Aiven Cloud) |
| Validation | Joi (backend), custom validators (frontend) |
| Hosting (Frontend) | Vercel |
| Hosting (Backend) | Render |

---

## Features

- ✅ View all restaurants in a table
- ✅ Add a new restaurant via a modal form
- ✅ Edit an existing restaurant inline
- ✅ Delete a restaurant with a confirmation dialog
- ✅ Frontend validation (min length, numeric-only contact with 10-digit minimum)
- ✅ Backend validation via Joi schemas
- ✅ Clean layered architecture (Controller → Service → Repository)
- ✅ Simple landing page with navigation to the CRUD interface

---

## Project Structure

```
Restaurant-list/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration (Sequelize)
│   │   ├── constants/       # Shared message strings
│   │   ├── controllers/     # Route handlers
│   │   ├── dtos/            # Data Transfer Objects
│   │   ├── infrastructure/
│   │   │   └── database/
│   │   │       ├── models/       # Sequelize models
│   │   │       └── repositories/ # Data access layer
│   │   ├── interfaces/      # TypeScript interfaces
│   │   ├── middlewares/     # Error handling, validation
│   │   ├── routes/          # Express route definitions
│   │   ├── services/        # Business logic
│   │   ├── shared/          # DI container, AppError utility
│   │   ├── validators/      # Joi validation schemas
│   │   ├── app.ts           # Express app setup
│   │   └── index.ts         # Server entry point
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/             # Axios API calls
    │   ├── components/      # Reusable UI components
    │   │   ├── ConfirmDialog.tsx
    │   │   ├── RestaurantForm.tsx
    │   │   └── RestaurantTable.tsx
    │   ├── pages/           # Page-level components
    │   │   ├── LandingPage.tsx
    │   │   └── RestaurantsPage.tsx
    │   ├── types/           # TypeScript interfaces
    │   ├── validators/      # Frontend validation logic
    │   ├── App.tsx          # Router setup
    │   └── main.tsx         # App entry point
    ├── .env
    ├── vercel.json          # Vercel SPA rewrite rules
    └── package.json
```

---

## Getting Started (Local Development)

### Prerequisites
- Node.js v18+
- MySQL running locally

### 1. Clone the repository
```bash
git clone https://github.com/kannanCodes/DineHub.git
cd DineHub
```

### 2. Set up the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=5001
DB_HOST=localhost
DB_PORT=3306
DB_NAME=restaurant_db
DB_USER=root
DB_PASSWORD=your_password
```

Start the backend dev server:
```bash
npm run dev
```

The backend will run at `http://localhost:5001`.

### 3. Set up the Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/`:
```env
VITE_API_BASE_URL=http://localhost:5001/api
```

Start the frontend dev server:
```bash
npm run dev
```

The frontend will run at `http://localhost:5173`.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/restaurants` | Get all restaurants |
| `GET` | `/api/restaurants/:id` | Get a restaurant by ID |
| `POST` | `/api/restaurants` | Create a new restaurant |
| `PUT` | `/api/restaurants/:id` | Update a restaurant |
| `DELETE` | `/api/restaurants/:id` | Delete a restaurant |

### Request Body (POST / PUT)
```json
{
  "name": "Restaurant Name",
  "address": "123 Street, City",
  "contact": "9876543210"
}
```

---

## Deployment

| Service | Purpose | Notes |
|---|---|---|
| Vercel | Frontend hosting | Auto-deploys on push to `main` |
| Render | Backend hosting | Auto-deploys on push to `main` |
| Aiven | Managed MySQL | SSL required in production |

### Key environment variables on Render:
```
NODE_ENV=production
DB_HOST=<aiven_host>
DB_PORT=<aiven_port>
DB_USER=<aiven_user>
DB_PASSWORD=<aiven_password>
DB_NAME=defaultdb
```

### Key environment variable on Vercel:
```
VITE_API_BASE_URL=https://<your-render-url>.onrender.com/api
```
