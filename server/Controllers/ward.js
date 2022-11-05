const Wards = require('../Models/ward');

exports.createWard = async(req, res) => {

    try {
        const existedWards = await Wards.findOne({ wardId: req.body.wardId })
        if (existedWards) {
            return res.status(200).json({ message: "This Ward Alredy exist" })
        }

        const newWard = await new Wards({
            WardId: req.body.WardId,
            wardType: req.body.wardType,
            wardRate: req.body.wardRate,
            notes: req.body.notes,
            
        })

        const saveWard = newWard.save()

        if (saveWard) {
            return res.status(200).json({ message: "Ward created succesfully" })
        }
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchWard = async(req, res) => {
    try {
        const Ward = await Wards.find({});
        if (Ward) {
            return res.status(200).json(Ward)
        }
    } catch (error) {
        return res.status(400).json(error)

    }
}