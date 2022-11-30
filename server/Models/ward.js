const mongoose = require('mongoose')

const wardSchema = new mongoose.Schema({
    WardId: Number,
    wardType: String,
    wardRate: String,
    notes: String,
    bedNumber:{
        type: Number,
        default: 0
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Wards', wardSchema)