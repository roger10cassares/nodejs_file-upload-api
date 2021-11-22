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

app.listen(3300);