const mongoose = require('mongoose')

const wardSchema = new mongoose.Schema({
    wardId: String,
    wardType: String,
    wardRate: String,
    notes: String,
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Wards', wardSchema)