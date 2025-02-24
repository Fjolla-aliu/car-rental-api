# Car Rental API

This is a simple RESTful API built with Node.js and Express.js for car rentals and user authentication.

## Features

- **User Authentication**: Register and log in users with secure password handling.
- **Profile Management**: Retrieve user profile information.
- **Car Listings**: View and explore available rental cars.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/car-rental-api.git
cd car-rental-api
```

2. Install dependencies

```sh
npm install
```

## Running the server

```sh
node server.js
```

The server should now be running on http://localhost:3000.

## Configure environment variables: Create a .env file and add:

```properties
PORT=3000
MONGODB_URI=mongodb://localhost:27017/carRental
SECRET_KEY=jwt_secret_key
```

## Seeding the Database

To seed the database with initial data, the seedCars function is called automatically when the server starts. This function checks if the cars collection is empty and inserts sample data if necessary.

## API Endpoints

### Authentication Routes

#### Register User

- **Endpoint**: `POST /api/auth/register`
- **Description**: Registers a new user.
- **Request Body**:

  ```json
  {
    "name": "Fjolla",
    "email": "fjolla@email.com",
    "password": "password"
  }
  ```

#### Login User

- **Endpoint**: `POST /api/auth/login`
- **Description**: Logs in an existing user.
- **Request Body**:

  ```json
  {
    "username": "fjolla",
    "password": "password"
  }
  ```

#### Get My Profile

- **Endpoint**: `GET /api/auth/my-profile`
- **Description**: Fetches the profile of the authenticated user.
- **Headers**:

  ```http
  Authorization: Bearer jwt_token
  ```

### Car Rental Routes

#### Get Rental Cars

- **Endpoint**: `GET /api/cars/rental-cars`
- **Description**: Retrieves a list of available rental cars sorted by price.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
