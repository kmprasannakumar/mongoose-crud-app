Mongoose CRUD App

Setup:
1. Install dependencies:
	 npm install
2. Make sure MongoDB is running locally (or set a custom connection string).

Optional environment variables:
- PORT=3000
- MONGO_URI=mongodb://localhost:27017/mongoose_crud_app

Run:
- npm start

Development mode (auto-restart):
- npm run dev

Health check:
- GET http://localhost:3000/api/health

Browser check:
- Open http://localhost:3000 to view the Mongoose CRUD Users page.
- Opening http://localhost:3000/api/health should return:
	{"status":"ok","database":"connected"}

User endpoints:
- POST http://localhost:3000/api/users
- GET http://localhost:3000/api/users
- GET http://localhost:3000/api/users/:id
- PUT http://localhost:3000/api/users/:id
- DELETE http://localhost:3000/api/users/:id

Sample request body:
{
	"name": "John Doe",
	"email": "john@example.com",
	"age": 25
}