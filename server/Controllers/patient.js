const Patient = require('../Models/patient');
const Room = require('../Models/room');
const Ward = require('../Models/ward');

exports.createPatient = async(req, res) => {

    try {
        const existedPatient = await Patient.findOne({ personalPhone: req.body.personalPhone })
        if (existedPatient) {
            return res.status(200).json({ message: "This Patient Alredy exist" })
        }

        const newPatient = await new Patient({
            address: req.body.address,
            admitionDate: req.body.admitionDate,
            gender: req.body.gender,
            patientName: req.body.patientName,
            patientType: req.body.patientType,
            personalPhone: req.body.personalPhone,
            referral: req.body.referral,
            roomId: req.body.roomId,
            wardID: req.body.wardID,
            
            
        })

        if(req.body.wardID){
            const checkWard = await Ward.find({WardId: req.body.WardId,  bedNumber: { $lt: 5 }});

            console.log(checkWard[0])
            if(checkWard.length===0){
                return res.status(404).json({ message: "Invalid Ward" })
                // throw new NotFoundException("Invalid Room ID");
             }

            //  checkWard[0]

            //  const editward = await Ward.findOneAndUpdate({WardId: req.body.WardId},
            //     {
            //         $inc: { bedNumber: +1}
            //     },
            //      {new: true});

            //      console.log(editward)
    
            //      if(!editward){
            //         return res.status(200).json({ message: "Successfully Edited" })
            //         // throw new NotFoundException("Invalid Room ID");
            //      }
        }

        if(req.body.roomId){
            const checkRoom = await Room.find({roomid: req.body.roomId, isUsed: false});

            console.log(checkRoom)
            if(checkRoom.length===0){
                return res.status(404).json({ message: "Invalid Room ID" })
                // throw new NotFoundException("Invalid Room ID");
             }
    
            const findroom = await Room.findOneAndUpdate({roomId: req.body.roomId},
                {
                    isUsed: true
                },
                 {new: true});
    
                 console.log(findroom)
    
                 if(!findroom){
                    return res.status(200).json({ message: "Invalid Room ID" })
                    // throw new NotFoundException("Invalid Room ID");
                 }
        }

       

    
        const savePatient = newPatient.save()

        if (savePatient) {
            return res.status(200).json({ message: "Patient created succesfully" })
        }
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchPatients = async(req, res) => {
    try {
        const Patients = await Patient.find({});
        if (Patients) {
            return res.status(200).json(Patients)
        }
    } catch (error) {
        return res.status(400).json(error)

    }
}

exports.updatePatient = async (req, res)=>{

    const id =req.params.id
    
    try {
        const updatePatient = await Patient.findOneAndUpdate({_id: id}, {
            address: req.body.address,
            admitionDate: req.body.admitionDate,
            gender: req.body.gender,
            patientName: req.body.patientName,
            patientType: req.body.patientType,
            personalPhone: req.body.personalPhone,
            referral: req.body.referral,
            roomId: req.body.roomId,
            wardID: req.body.wardID,
    
        }, {new: true});

        if (updatePatient) {
            return res.status(200).json({ message: "Patient updated succesfully" })
        }

    } catch (error) {
        return res.status(400).json(error)
    }

}

exports.deletePatient = async (req, res)=>{

    const id = req.params.id

    try {
        const deletePatient = await Patient.findOneAndDelete({_id: id});

        if (deletePatient) {
            return res.status(200).json({ message: "Patient deleted succesfully" })
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}

exports.findPatient = async (req, res)=>{
    try {
        const patient = await Patient.findOne({personalPhone: req.body.personalPhone})
        return res.status(200).json(patient)
    } catch (error) {
        return res.status(400).json(error)
    }
}