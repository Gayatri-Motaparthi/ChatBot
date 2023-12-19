const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public", { "Content-Type": "application/javascript" }));
app.use(express.static(path.join(__dirname, 'routes')));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Specify the views directory

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://gayatriMotaparthi:LearnFlask123@cluster0.l8cnhl0.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// client.connect();

// module.exports.db = client.db;
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const Router = require("./routes/home");
app.use("/", Router);

// app.listen(3000, () => {
//     console.log("Server started")
// })

var http = require('http');
const server = http.createServer(app);

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:3000`);
});