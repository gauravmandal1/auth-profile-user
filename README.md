Here's the updated `README.md` file with the added API details:

# Auth User


## Project Structure

```plaintext
authentication-system/
├── controllers/                # controllers
│   ├── authController.js       # Authentication logic
│   └── profileController.js    # Profile management logic
│
├── services/                   # Business logic and interaction with models
│   ├── authService.js          # Authentication services
│   └── profileService.js       # Profile management services
│
├── models/                     # MongoDB models 
│   └── User.js                 # User model schema
│
├── routes/                     # Express route definitions
│   ├── authRoutes.js           # Routes for authentication
│   └── profileRoutes.js        # Routes for profile management
│
├── views/                      # Handlebars (HBS) templates
│   ├── auth/                   # Templates for authentication
│   │   ├── register.hbs        # Registration page
│   │   └── login.hbs           # Login page
│   ├── layout/                 # Layout templates
│   │   └── main.hbs            # Main layout
│   ├── profile/                # Templates for profile management
│   │   ├── profile.hbs         # Profile page
│   │   └── viewProfiles.hbs    # View profiles page
│
├── .env                        # Environment variables
├── app.js                      # Main Express application
├── package.json                # NPM dependencies and scripts
└── README.md                   # Project documentation
```

## APIs

### Registration API

**Endpoint:** `POST /auth/register`

**Description:** This API endpoint allows a new user to register an account. Upon successful registration, it returns a JSON Web Token (JWT) and the user data.

#### Request:

- **URL:** `http://localhost:5000/auth/register`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "name": "gaurav tester",
      "email": "gauravmandal66789@gmail.com",
      "password": "12345678"
  }
  ```

#### Response:

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
      "token": "your_jwt_token_here",
      "user": {
          "id": "user_id_here",
          "name": "gaurav tester",
          "email": "gauravmandal66789@gmail.com",
          "isAdmin": true,
          "isPublic": true
      }
  }
  ```

![Register](https://github.com/gauravmandal1/auth-profile-user/assets/64638825/e98278f2-41a9-4a8a-a174-c17c234e1c77)

### login 


- **URL:** `http://localhost:5000/auth/login`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "email": "gauravmandal66789@gmail.com",
      "password": "12345678"
  }
  ```

#### Response:

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
      "token": "your_jwt_token_here",
      "user": {
          "id": "user_id_here",
          "name": "gaurav tester",
          "email": "gauravmandal66789@gmail.com",
          "isAdmin": true,
          "isPublic": true
      }
  }



### Get Profile Data API

**Endpoint:** `POST /profile/getData`

**Description:** This API endpoint retrieves the profile data of the authenticated user based on the provided JWT token.

#### Request:

- **URL:** `http://localhost:5000/profile/getData`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "token": "your_jwt_token_here"
  }
  ```

#### Response:
<img width="700" alt="Screenshot 2024-05-23 at 11 36 23 PM" src="https://github.com/gauravmandal1/auth-profile-user/assets/64638825/f77747be-7ea3-4a98-8ae0-64283952b565">

### Get All Profiles API

**Endpoint:** `POST /profile/getAllProfile`

**Description:** This API endpoint retrieves the profile data of all users based on the provided JWT token. The data returned depends on the user's role.

#### Request:

- **URL:** `http://localhost:5000/profile/getAllProfile`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "token": "your_jwt_token_here"
  }
  ```

#### Response:
<img width="705" alt="Screenshot 2024-05-23 at 11 38 06 PM" src="https://github.com/gauravmandal1/auth-profile-user/assets/64638825/d3b900f0-6a09-4e76-bda7-53fef556f6af">


```


**Endpoint:** `POST /profile/update`

**Description:** This API endpoint updates the profile data of the authenticated user based on the provided JWT token and the updated data.

#### Request:

- **URL:** `http://localhost:5000/profile/update`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "token": "your_jwt_token_here",
      "name": "new_name",
      "email": "new_email@example.com",
      "isPublic": false
  }
  ```

#### Response:

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
      "id": "user_id_here",
      "name": "new_name",
      "email": "gauravmandal.jsr@gmail.com",
      "isAdmin": true,
      "isPublic": false
  }
  ```
```
Kindly check this video for a working reference. It includes some client-side code for testing purposes.
https://www.loom.com/share/648920414184418bac0017cc9df61210?sid=a1778808-720f-414f-a296-c756431d8575
