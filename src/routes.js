const routes = require('express').Router();
const multer = require("multer");
const multerConfig = require('./config/multer')


// multer is a middleware!
//multer().single realize a single upload file because we want to show the progress of each file in the uploading process
routes.post("/posts", multer(multerConfig).single('file'), (req,res) => {
  console.log(req.file);
    // uses json heare to respond a json formatted text (Restful JSON standard)
  return res.json({ Hello: "Word"});
});

module.exports = routes;