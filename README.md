# Car Rental API

This is a Car Rental API built with Node.js, Express, and MongoDB. The API allows users to manage car rentals, including adding, updating, and deleting cars, as well as user authentication.

## Prerequisites

- Node.js (v14 or later)
- MongoDB (v4 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

`` `sh
git clone https://github.com/your-username/car-rental-api.git
cd car-rental-api

2. Install dependencies

npm install

## Running the server
node server.js

The server should now be running on http://localhost:3000.

## Seeding the Database
To seed the database with initial data, the seedCars function is called automatically when the server starts. This function checks if the cars collection is empty and inserts sample data if necessary.

API Endpoints
Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in a user
Cars
GET /api/cars: Get a list of all cars
POST /api/cars: Add a new car
PUT /api/cars/:id: Update a car
DELETE /api/cars/:id: Delete a car
