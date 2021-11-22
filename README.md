


yarn init
yarn add express morgan multer mongoose

// Morgan is to make log oh HTTP requests
// Mongoose is the library to deal with Mongodb database
// Multer is the middleware of express to manipulate multipartform requests  (bringing files)


AT first, create an src dir with simple index.js request,response GET at / the send the response back "Hello Word" at the DOM in port 3000


const express = require("express");

const app = express();

app.get("/", (req,res) => {
  return res.send("Hello Word");
});

app.listen(3000);




From the terminal run node src/index.js and open the application at the browser http://127.0.0.1:3000


Now, create a separate routes.js file that shall define a variable routes than moves the app.ger() to inside the routes file:


So, index.js:

const express = require("express");

const app = express();

app.use(require("./routes"));

app.listen(3000);


And routes.js

const routes = require('express').Router();

routes.get("/", (req,res) => {
  // uses json heare to respond a json formatted text (Restful JSON standard)
  return res.json({ Hello: "Word"});
});

module.exports = routes;


Now, at index.js:
// Define to express deal with the body of requestes coming in the JSON format
// Tell to express deall with the url encoded standard to send the files submiting
// HTTP requestes logging libray using the 'dev' format


const express = require("express");
const morgan = require("morgan")

const app = express();

// Define to express deal with the body of requestes coming in the JSON format
app.use(express.json());
// Tell to express deall with the url encoded standard to send the files submiting
app.use(express.urlencoded({ extended: true }));
// HTTP requestes logging libray using the 'dev' format
app.use(morgan('dev'));


app.use(require("./routes"));

app.listen(3000);




Now, to restart the app everytime we have a js changing in the code, please install the nodemon as a dev dependency:
yarn add -D nodemon

go to package.json and create 2 scripts -> dev to development and start to production. Never changes the files in the production enviorment!
...
"scripts": {
  "dev": "nodemon src/index.js",
  "start": "node index.js"
},
...


Now, run the application with 
yarn dev





Create a src/config/multer.js file to use multer

in rotes.js -> 

...

const multer = require("multer");

const multerConfig = require('./config/multer')

...

// multer is a middleware!

//multer().single realize a single upload file because we want to show the progress of each file in the uploading process



routes.post("/posts", multer('file'), (req,res) => {

})





































