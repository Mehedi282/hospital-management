const Rooms = require('../Models/room');

exports.createRoom = async(req, res) => {

    try {
        const existedRooms = await Rooms.findOne({ roomid: req.body.roomid })
        if (existedRooms) {
            return res.status(200).json({ message: "This Room Id Alredy exist" })
        }

        const newRoom = await new Rooms({
            roomid: req.body.roomid,
            roomType: req.body.roomType,
            roomRate: req.body.roomRate,
            notes: req.body.notes,     
        })

        const saveRoom = newRoom.save()

        if (saveRoom) {
            return res.status(200).json({ message: "Room created succesfully" })
        }
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchRoom = async(req, res) => {
    try {
        const Room = await Rooms.find({});
        if (Room) {
            return res.status(200).json(Room)
        }
    } catch (error) {
        return res.status(400).json(error)

    }
}