const Patient = require('../Models/patient');

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
            personalPhone: req.body.personalPhone,
            referral: req.body.referral,
            roomId: req.body.roomId,
            wardID: req.body.wardID,
            
            
        })

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