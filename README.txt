Run the below commands to install the necessary libraries:

npm init -y
npm install express mongoose body-parser

To Run the Server:

node server.js

Use Postman or curl to test these endpoints:

POST http://localhost:3000/users — Create a user

GET http://localhost:3000/users — Get all users

GET http://localhost:3000/users/:id — Get a specific user

PUT http://localhost:3000/users/:id — Update a user

DELETE http://localhost:3000/users/:id — Delete a user