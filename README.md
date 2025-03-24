Sorry, Failed ;(

This is a full-stack Recipe Book application with a backend built using NestJS and a frontend using React.

Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

Backend Setup (NestJS)

Clone the repository:

git clone https://github.com/Prazdn1ck/TestTask-DevelopsToday
cd backend

Install the dependencies:

npm install / yarn install

Configure enviroment variables, create a .env file in the root directory and add the necessary environment variables:
.env
PORT=3000
REACT_APP_API_URL=http://localhost:3000

Run server by the command:
npm run start:dev;

Check get requests in postman

GET http://localhost:3000/recipes/all or (by-ingredient, by-country, by-category)

FRONTEND

npm install

Run the server:
npm start
