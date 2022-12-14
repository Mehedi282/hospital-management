const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    address: String,
    admitionDate: String,
    gender: String,
    patientName: String,
    patientType:{
        type: String,
        enum:["inpatient", "outpatient"]
    },
    personalPhone: String,
    referral: String,
    roomId: String,
    wardID: String,
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Patient', patientSchema)