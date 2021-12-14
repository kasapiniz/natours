# Natours Application

Built using modern technologies: node.js, express, mongoDB, mongoose and the others.

## Deployed Version

Live demo (Feel free to visit) 👉 : [https://natourssimple.herokuapp.com/](https://natourssimple.herokuapp.com/) 

## Key Features

- Authentication and Authorization
  * Login and logout
- Tour
  * Manage booking, check tours map, check users' reviews and rating
- User profile
  * Update username, photo, email, and password
- Credit card Payment

## How To Use
### Book a tour
- Login to the site
- Search for tours that you want to book
- Book a tour
- Proceed to the payment checkout page

- Enter the card details (Test Mood):
  ```bash
   - Card No. : 4242 4242 4242 4242
   - Expiry date: 02 / 22
   - CVV: 222
  ```
- Finished!
### Manage your booking
- Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this page after you have completed the booking.
### Update your profile
- You can update your own username, profile photo, email and password.
## API Usage
- Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:
  ```bash
    - {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
    - {{password}} with your user password as value.
  ```
  Check [Natours API Documentation](https://documenter.getpostman.com/view/18439262/UVR7JnLF)  for more info.

API Features:

Tours List 👉  [https://natourssimple.herokuapp.com/api/v1/tours](https://natourssimple.herokuapp.com/api/v1/tours)

Tours State 👉  [https://natourssimple.herokuapp.com/api/v1/tours/tour-stats](https://natourssimple.herokuapp.com/api/v1/tours/tour-stats)

Get Top 5 Cheap Tours 👉  [https://natourssimple.herokuapp.com/api/v1/tours/top-5-cheap](https://natourssimple.herokuapp.com/api/v1/tours/top-5-cheap)

Get Tours Within Radius 👉 [https://natourssimple.herokuapp.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi](https://natourssimple.herokuapp.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi)

## Deployment
The website is deployed with git into heroku. Below are the steps taken:
  ```bash
   - git init
   - git add -A
   - git commit -m "Commit message"
   - heroku login
   - heroku create
   - heroku config:set CONFIG_KEY=CONFIG_VALUE  
   - parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js
   - git push heroku master
   - heroku open
  ```
You can also changed your website url by running this command:
  ```bash
   heroku apps:rename natours-users
  ```
## Build With
- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Stripe](https://stripe.com/) - Online payment API
- [Postman](https://www.postman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
- [Heroku](https://www.heroku.com/) - Cloud platform

## Installation
 You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the dependencies by running
  ```bash
    - $ npm i
    set your env variables
    - $ npm run watch:js
    - $ npm run build:js
    - $ npm run dev (for development)
    - $ npm run start:prod (for production)
    - $ npm run debug (for debug)
    - $ npm start
    Setting up ESLint and Prettier in VS Code 👇
    - $ npm i eslint prettier eslint-config-prettier eslint-plugin- prettier eslint-config-airbnb eslint-plugin-nodeeslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
  ```
## Acknowledgement
This project is part of the online course I've taken at Udemy. Thanks to Jonas Schmedtmann for creating this awesome course! Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2022](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)

