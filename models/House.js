const mongoose = require('mongoose') // Importando la libreria

// Creando el modelo de house
const HouseSchema = new mongoose.Schema({
    address: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    state: {
        type: String, 
        required: true  
    },
    size: {
        type: Number, 
        required: true
    },
    type: {
        type: String, 
        required: true
    },
    zip_code: {
        type: Number, 
        required: true
    },
    rooms: {
        type: Number, 
        required: true
    },
    bathrooms: {
        type: Number, 
        required: true
    },
    parking: {
        type: Number, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    code: {
        type: Number, 
        required: true
    },
    image: {
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model('house', HouseSchema) 