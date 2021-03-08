# Bike Around

Live-link: https://bike-around.herokuapp.com/

## Introduction

Bike Around is a sharing economy platform for bicycles based on AirBnB built with PERN. The app allows users to:

- search bicycle listings based on location, description, size and other criteria
- create bookings for listed bicycles
- edit and cancel bookings
- view their bookings
- filter their bookings by pending, completed, and cancelled

## Structure

### Back end

Bike Around is built using Node.JS with Express handling routes and a postgreSQL database. Backend routes use a RESTful framework fulfilled with JSON API.

### Front end

Bike Around's front end employs React.js and uses Redux to manage state. 

## Features

- ### Sign Up

Users will input their information to register a new account through a modal.

- ### Login

A registerd user will login to the site using email or username through a modal.

- ### Listings

Listings for bicycles are viewable and searchable by any user in a gallery. Each listing will have a dedicated page. Validated users will be able to create bookings from the listing page.

- ### Bookings

Validated users will be able to create bookings, update their bookings, and access future, past, and cancelled bookings.

- ### User Experience

Unvalidated users can view all listings and search listings. If an unvalidated user attempts to check availability of a listing they will be directed to create an account or login.

Validated users can additionally create bookings; confirm, update or cancel a created booking; view their bookings and filter their bookings based on confirmed, past, or cancelled.

* #### Home
  From the Home page, a user can view all listing, login, or register.
  A validated user can view all listings, view all their bookings, or view their profile to see thier username and email and logout.
        
* #### View Listings
  All users will be able to view and search a list of all listings.

* #### Check Availability
  Validated users will be able to check availability of a listing.
  Listings that are already confirmed as booked will not be available. (Future Feature)

* #### Create a Booking
  When a user checks availability, a new booking is created with status 'pending'.
  The user is redirected to the booking form where they can confirm or edit the booking.
       
* #### Confirm a Booking
  When a user confirms a booking the status is updated to "confirmed".
  Listings belonging to a booking with status of "confirmed" are not available for new bookings. (Future Feature)
  Users are directed to a booking page.

* #### View all a User's Bookings
  A user can view all the bookings they have created.
  Users can filter by 'Past' 'Upcoming' or 'Cancelled'.
  Users can click on a booking to view or edit details.
       
* #### Update a Booking
  From the booking page a user can update details or cancel a booking.
  Cancelled bookings cannot be updated.
  Past bookings cannot be updated (Future Feature).
  A user can click browse listings to see other lisitngs
  
![Demo](Bike-Around-Demo.gif)
