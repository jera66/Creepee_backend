###  Introduction
This is the backend or under-the-hood of a project called Creepee. This project serves as a  backend designed to work with the frontend of the app. It receives requests from the frontend, and forwards these requests back with their respective answers. The server is implemented in Express using Mongoose. 

Creepee is one of the projects I've been working on at General Assembly. This project is the capstone and is the last project of the SEIR-PENGUIN cohort.
 
 <a href="https://creepee-app.herokuapp.com/">Deployed Link</a>


### Technologies used
1- Express/Node
2- Mongo/Mongoose 
3- Dotenv 
4- Cors 
5- Morgan
6- React
7-MongoDb

### List of dependencies
```js
require('dotenv').config()
const {PORT = 3002, DATABASE_URL} = process.env
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
```


### Model
```js
// The Creepee schema
const userSchema = new mongoose.Schema({
fullName: {
type: String,
required: true
},
email: {
type: String,
required: true
},
password: {
type: String,
required: true
}
})

```

### Middleware
```Js
/////////////////////////////////
//Middleware
//////////////////////////////////
app.use(cors()) //Preventing cors errors, opening up access for frontend
app.use(morgan('dev')) //Logging
app.use(express.json()) //Parsing json bodies
app.use(require('./controllers/user'))
ess.json())
```

### Project Backend Overview
This Creepee project is a one person project . This is an app that lets the user add a title and images, etc... as posts. It features a navbar with  signup, login, profile and post routes.

### Backend Route Table
| url             | method | action                       |
| --------------- | ------ | ---------------------------- |
| /posts/      | get    | get all posts (index)    |
| /posts      | post  | create a new post         |
| /post/:id   | put    | update a post             |
| /post/:id   | delete | delete a post          |

### Roadblocks
One of the major roadblock I encountered was deployment issues. It was really hard  to figure out the issue. I consumed about three hours trying to troubleshoot the deployment. Finally, I had to start from scratch again as it is best practice to perform the deployment when the roject is at its early stages.