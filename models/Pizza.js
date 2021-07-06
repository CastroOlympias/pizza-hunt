const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: toString
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: date,
        default:Date.now
    },
    size: {
        type: String,
    },
    toppings: []
})

// create the Pizza model using tyhe pizza Schema
const Pizza = model('Pizza', Pizza,Schema)

// export the Pizza model
module.exports = Pizza;