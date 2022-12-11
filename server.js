const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
const { MongoGridFSChunkError } = require("mongodb");
// const dbo = require("./db/connection");

mongoose.connect("mongodb+srv://Rohit:ROHIT123@cluster0.hrvqltk.mongodb.net/?retryWrites=true&w=majority")
    .then((val) => {
        console.log("Connected!");
    }).catch((err) => {
        console.log("error");
    })


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Rohit:ROHIT123@cluster0.hrvqltk.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// app.listen(port, () => {
//     client.connect(db => {
//         console.log("Connected");
//         let collection = client.db("db").collection("records");
//         // localStorage.setItem('collection', collection);
//         dbo.setDb(collection)
//     })

//     console.log(`Server is running on port: ${port}`);
// })


// client.connect(err => {
//     const collection = client.db("db").collection("records");
//     // perform actions on the collection object
//     console.log("Connectred");
//     // client.close();
// });


// app.listen(port, () => {
//     // perform a database connection when server starts
//     console.log(dbo.connectToServer());
//     dbo.connectToServer(function (err) {
//         console.log("HI");
//         if (err) console.error(err);

//     });
//     console.log(`Server is running on port: ${port}`);
// });