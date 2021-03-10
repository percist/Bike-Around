# Bike Around

* By [Chris Clark](https://percist.github.io/) -[Live site](https://bike-around.herokuapp.com/)

A sharing economy platform for bicycles based on AirBnB built with PostgreSQL - Express - React - Node.js stack. 

For a deeper dive into the planning process and code setup, please visit the [Wiki](https://github.com/percist/bike-around/wiki).


**Table of Contents**
  * [Bike Around at a Glance](#Bike-Around-at-a-glance)
  * [Technologies Used](#technologies-used)
  * [Application Architecture](#application-architecture)
  * [Frontend Overview](#frontend-overview)
  * [Backend Overview](#backend-overview)
  * [Backend Installation and Setup](#Backend-Installation-and-Setup)
  * [Frontend Installation and Run Application Locally](#Frontend-Installation-and-Run-Application-Locally)
  * [Conclusion](#conclusion)

## Bike Around at a Glance
Bike Around is a reservation platform based on AirBnB that allows users to reserve bicycles.

The application is built with a React frontend utilizing original components and styled after AirBnB (circa Q4 2020)
The backend is an Express server with a PostgreSQL database.

**Key Features**
* User sign in / sign up with token-based authentication and b-cyrpt password encryption
* Listings page where users can see all bicycles available
* Users can filter bicycles based on location, features, size, description, or title using the search bar
* Listing pages have more detailed information and additional pictures
* Users can check dates for availability
* Users can book available bicycles
* Users can update or cancel their bookings
* Users can see their upcoming, previous, and cancelled bookings and filter on status

## Technologies Used
* Frontend
  * React
  * Redux
  * Javascript
  * CSS
  * AWS (photo hosting)
* Backend
  * Express
  * Node.js
  * Sequelize
  * PostgreSQL
  * Heroku deployment

## Application Architecture
The frontend is a `create-react-app` using functional components with hooks. The backend is an express server with various RESTful endpoints. They are deployed to a Heroku server.

#### Bike Around Database Schema
![image](https://github.com/percist/Bike-Around/blob/master/Bike-Around-DB-Schema.png?raw=true)

## Frontend Overview
The front end incorporates some visual design elements from airBnB but uses all original architecture using custom components. Components are reused with unique styling to achieve a DRYer code base.

## Backend Overview
The Express backend is a collection of RESTful routes serving data to the frontend from the PostgreSQL database. Routes were designed to deliver as much targeted data as possible to limit the number of API calls from frontend components.

The database is queried using sequelize.

## Backend Installation and Setup

1. Clone this repository (only this branch)

  ```bash
  git clone https://github.com/percist/Bike-Around
  ```
2. Install Dependencies

  ```bash
   npm install
   ```
   
3. Create a **.env** file based on the .env.example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. From inside the backend file, use the commands in the **dbCommands.txt** file

6. Start the backend server

  ```bash
  npm start
  ```

## Frontend Installatin and Run Application Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Change Directory to fontend

  ```bash
  cd frontend
  ```
2. Install Dependencies

  ```bash
  npm install
  ```
3. Start the local host

  ```bash
  npm start
  ```
  
4. Visit application at localhost:3000 (changes you make locally will appear)


## Conclusion
Bike Around was a way to make AirBnB more like SpinLister and vice versa. Bicycles continue to be more popular than ever ant sites like SpinLister show they can be effective in the sharing economy.

Future features would include reviewing rides, creating listings, Google Maps API integration to search for listings, AWS integration for hosting images and adding optional accessories to bookings.
