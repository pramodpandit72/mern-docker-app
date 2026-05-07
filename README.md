# 🚀 MERN Dockerized Task Manager

A simple full-stack **Task Manager App** built using the MERN stack and containerized with Docker.

---

## 🧱 Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **Containerization:** Docker & Docker Compose

---

## 📌 Features

* Add tasks
* View tasks
* Store tasks in MongoDB
* Full Dockerized environment

---

## 🐳 Docker Setup

This project is fully containerized. No need to install Node.js or MongoDB manually.

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pramodpandit72/mern-docker-app
cd mern-docker-app
```

---

### 2. Run the App using Docker

```bash
docker-compose up --build
```

---

## 🌐 Access the App

* Frontend → http://localhost:5173
* Backend API → http://localhost:5000/tasks

---

## 🧠 How It Works

* Frontend runs in one container
* Backend runs in another container
* MongoDB runs in a separate container
* Docker Compose connects all services together

---

## 🔗 Important Notes

* Inside Docker, services communicate using service names:

  * `backend`
  * `mongo`
* Browser uses `localhost` to access services

---

## 📁 Project Structure

```
mern-docker-app/
│
├── frontend/        # React App
├── backend/         # Express API
├── docker-compose.yml
└── README.md
```

---

## 🐞 Common Issues

### ❌ Frontend not connecting to backend

Make sure API URL in frontend is:

```js
http://localhost:5000
```

---

### ❌ Changes not reflecting

Ensure Docker volumes are correctly configured or rebuild:

```bash
docker-compose up --build
```

---

## 🎯 What I Learned

* Docker & Docker Compose basics
* Multi-container application setup
* Container networking
* Port mapping
* Debugging Docker applications

---

## 🚀 Future Improvements

* Add authentication (JWT)
* Use environment variables (.env)
* Add Nginx reverse proxy
* CI/CD pipeline setup

---

## 🤝 Contributing

Pull requests are welcome!

---

## 📜 License

This project is open-source and free to use.
