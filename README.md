### Netflix Clone Backend – README

---

## 📖 **Project Overview**

This project is a **backend for a Netflix Clone** that provides features like **user authentication, movie search, and browsing functionalities**. Users can sign up, log in, search for movies, TV shows, or actors, and browse movie details. All interactions are secured using **JWT tokens** and **cookies**. The project is built using modern web technologies like **Node.js**, **Express**, **MongoDB**, and others.

---

## 🚀 **Key Features**

- **Authentication**:  
  - Sign up, log in, and log out functionalities.
  - Secure access to resources using **JWT tokens** and **cookies**.
  - Passwords are encrypted using **bcrypt** for added security.

- **Movie Browsing**:  
  - Search for movies, TV shows, or actors.
  - Access detailed information about movies and TV shows.

- **Authorization**:  
  - Only logged-in users can browse movies and other resources.
  - Unauthorized users are restricted from accessing the content.

- **Robust Database**:  
  - Movie data and user credentials are stored and managed using **MongoDB**.
  - **Mongoose** is used for database modeling.

- **Modern APIs**:  
  - **Axios** is used to fetch movie and TV show data from external APIs.

---

## 🛠️ **Tech Stack**

- **Backend**:  
  - Node.js  
  - Express.js  

- **Authentication**:  
  - JSON Web Tokens (JWT)  
  - Cookies  

- **Database**:  
  - MongoDB  
  - Mongoose  

- **Security**:  
  - Bcrypt for password hashing  

- **HTTP Client**:  
  - Axios  

- **Others**:  
  - JavaScript  

---

## 📦 **Installation Guide**

Follow these steps to set up and run the project locally.

### 1️⃣ Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or on a cloud service like Atlas)

---

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/netflix-clone-backend.git
cd netflix-clone-backend
```

---

### 3️⃣ Install Dependencies
Run the following command to install all necessary packages:
```bash
npm install
```

---

### 4️⃣ Set Up Environment Variables
Create a `.env` file in the project root and add the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
MDB_API_KEY=your_TMDB_api_read_access_token

```

Replace `your_mongodb_connection_string` with your MongoDB URI and `your_jwt_secret_key` with a secure secret key for JWT and `your_TMDB_api_read_access_token
` with your generated api read access token from TMDB.

---

### 5️⃣ Start the Server
Run the following command to start the server:
```bash
npm start
```

The server will start on `http://localhost:5000` by default.

---

## 🔍 **API Endpoints**

### 1. **Authentication**
- **POST** `/api/auth/signup`  
  Register a new user.  
  **Body Parameters**:  
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

- **POST** `/api/auth/login`  
  Log in a user.  
  **Body Parameters**:  
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

- **POST** `/api/auth/logout`  
  Log out a user.

---

### 2. **Movies**
- **GET** `/api/movies`  
  Fetch a list of all movies (requires authentication).  

- **GET** `/api/movies/search?query={search_term}`  
  Search for movies, TV shows, or actors by name.  

---

### 3. **User Data**
- **GET** `/api/users/me`  
  Get details of the logged-in user.

---

## 🛡️ **Security Features**
- Passwords are securely hashed using **bcrypt**.
- Tokens are issued using **JWT**, ensuring secure session management.
- Access control is implemented to restrict non-authenticated users from accessing resources.

---

## 🙌 **Contributing**
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## 🧑‍💻 **Author**
**Divyesh Variya** – [GitHub Profile](https://github.com/Divyesh1692)

---

## 🎉 **Acknowledgments**
- Special thanks to **TMDB API** for movie and TV show data.
- Inspired by Netflix's user-friendly interface and features.

---

