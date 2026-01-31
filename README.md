# Task Manager

A full-stack web application for creating, reading, updating, and deleting tasks. Built with Express.js backend and vanilla JavaScript frontend.

## 📋 Features

- ✅ Create new tasks with title, description, and status
- ✅ View all tasks sorted by creation date (newest first)
- ✅ Update existing tasks
- ✅ Delete tasks
- ✅ Task status management (Pending, In Progress, Completed)
- ✅ Responsive design with clean UI
- ✅ MongoDB database integration

## 🏗️ Project Structure

```
task-manager/
├── backend/
│   ├── .env                 # Environment variables
│   ├── package.json         # Dependencies & scripts
│   ├── server.js            # Express server setup
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── controllers/
│   │   └── taskController.js # Task business logic
│   ├── models/
│   │   └── task.js          # Task MongoDB schema
│   └── routes/
│       └── taskRoutes.js    # API routes
└── frontend/
    ├── index.html           # HTML structure
    ├── style.css            # Styling
    └── script.js            # Frontend logic & API calls
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (running locally or Atlas URI)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/task_manager_db
   ```

4. Start the server:
   ```bash
   npm run dev    # with nodemon (hot reload)
   npm start      # production
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Open `index.html` in a web browser or use a live server:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Or use VS Code Live Server extension
   ```

3. Make sure the backend is running on `http://localhost:5000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Fetch all tasks |
| GET | `/api/tasks/:id` | Fetch a single task |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Request/Response Examples

**Create Task (POST)**
```json
{
  "title": "Complete project",
  "description": "Finish the task manager app",
  "status": "in-progress"
}
```

**Response**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Complete project",
  "description": "Finish the task manager app",
  "status": "in-progress",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

## 🛠️ Tech Stack

**Backend:**
- Express.js - Web framework
- Mongoose - MongoDB ORM
- CORS - Cross-origin resource sharing
- Dotenv - Environment variables

**Frontend:**
- HTML5 - Markup
- CSS3 - Styling
- Vanilla JavaScript - Interactivity
- Fetch API - HTTP requests

**Database:**
- MongoDB - NoSQL database

## 📝 Task Schema

```javascript
{
  title: String (required, max 100 chars),
  description: String (optional, max 500 chars),
  status: String (enum: "pending", "in-progress", "completed"),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🎨 UI Features

- Clean, modern design with card-based layout
- Color-coded status badges
- Edit and delete buttons for each task
- Form validation
- Loading states
- Task counter display

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running locally or update `MONGO_URI` in `.env`
- Check if MongoDB is accessible at the specified URI

**CORS Error:**
- Verify the frontend is making requests to `http://localhost:5000`
- Check that CORS is enabled in `server.js`

**Tasks not loading:**
- Open browser console (F12) to check for errors
- Verify backend server is running on port 5000
- Check network tab in DevTools

## 📦 Dependencies

See `backend/package.json` for all dependencies and versions.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a full-stack learning project.
