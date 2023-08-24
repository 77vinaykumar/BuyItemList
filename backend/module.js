const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    id: String,
    title: {
        type: String,
        required: true
    },
    amount: String,
    date: Date
});



const ItemList = new mongoose.model("Itemlist", ItemSchema);


module.exports = ItemList;