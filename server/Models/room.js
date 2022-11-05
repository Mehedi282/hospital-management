const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomid: Number,
    roomType: String,
    roomRate: Number,
    notes: String,
})

module.exports = mongoose.model('RoomDetails', roomSchema);