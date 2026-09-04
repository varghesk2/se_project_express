# WTWR (What to Wear?)

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

- Pitch Video https://www.loom.com/share/4c05764f447f473c8280769ae91fc73f


WTWR Express Backend Project Description

This is the back-end server for the What to Wear? application. It provides an API that allows users to create and manage user profiles and clothing items based on weather conditions. The server connects to a MongoDB database to store application data and handles requests for creating, retrieving, and deleting users and clothing items. It also includes temporary authorization middleware, input validation, and centralized error handling to ensure reliable API responses.

Functionality

-Create and retrieve user profiles.
-Create, retrieve, and delete clothing items.
-Store data in a MongoDB database using Mongoose.
-Validate user and clothing item data, including URL validation.
-Handle invalid requests and non-existent resources with appropriate HTTP status codes.
-Support temporary user authorization using middleware.
-Organize the application using routes, controllers, models, and utility modules.

Technologies and Techniques Used

-Node.js for the server-side runtime environment.
-Express.js to build the REST API and manage routing.
-MongoDB as the application's database.
-Mongoose for database modeling and schema validation.
-Validator for validating URL fields.
-ESLint with the Airbnb Style Guide and -Prettier to maintain consistent code quality and formatting.
-Nodemon to automatically restart the server during development.
-RESTful API design with modular project architecture, separating routes, controllers, models, and utility files.
