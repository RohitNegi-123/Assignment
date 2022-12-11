const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    name: String
},
    {
        age: Number
    }, {
    batch: String
}



)

const Model = mongoose.model('db', Schema);
// exModel;