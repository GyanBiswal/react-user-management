# React User Management App
A simple React app that allows users to log in, view a list of users, edit user details, and delete users.

# Features
  - User Login (POST /api/login)
  - Fetch Users (GET /api/users?page={page})
  - Edit User (PUT /api/users/{id})
  - Delete User (DELETE /api/users/{id})
  - Protected routes using authentication

# Getting Started
  1. Clone the Repository
     ```
     git clone https://github.com/your-username/user-management-app.git
     cd user-management-app
  2. Install Dependencies
     Make sure you have Node.js and npm installed. Then, run:
     ```
     npm install
     ```
  4.  Start the Development Server
      ```
      npm start
      ```
# Authentication
  This project uses Reqres API for authentication. Use the following credentials:
  ```
  Email: eve.holt@reqres.in
  Password: cityslicka

  ```

# API Endpoints
  1. Fetch User
     ```
     GET https://reqres.in/api/users?page={page}
     ```
  2. Edit User
     ```
     PUT https://reqres.in/api/users/{id}
     ```
  3. Delete User
     ```
     DELETE https://reqres.in/api/users/{id}
     ```

# Assumptions & Considerations
  1. The Reqres API does not persist updates. When a user is edited, the changes will not reflect in future requests.
  2. The Delete functionality will remove users from the local state but not actually delete them from the API permanently.
  3. The app uses React Router for navigation.

# Netlify Link
  ```
  https://vocal-blancmange-491ae5.netlify.app/
  ```



