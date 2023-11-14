//en app dejo solo middleware
//agrego 1 helper con las rutas "routes".

const express = require("express");
const app__server = express();
const morgan = require("morgan");
const cors = require("cors");
const { routes } = require("./routes/indexroutes")
require("./db")


// app__server.name = "API__DOGS";

app__server.use(express.json())
app__server.use(morgan("dev"));
app__server.use(cors())

app__server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

app__server.use("/", routes);

// // Error catching endware.
// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//    const status = err.status || 500;
//    const message = err.message || err;
//    console.error(err);
//    res.status(status).send(message);
//  });

module.exports = app__server;


