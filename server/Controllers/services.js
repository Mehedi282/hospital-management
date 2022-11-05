const Services = require('../Models/services');

exports.createService = async(req, res) => {

    try {
        const existedServices = await Services.findOne({ serviceId: req.body.serviceId })
        if (existedServices) {
            return res.status(200).json({ message: "This service Alredy exist" })
        }

        const newService = await new Services({
            serviceId: req.body.serviceId,
            serviceName: req.body.serviceName,
            charge: req.body.charge,
            duration: req.body.duration,
            notes: req.body.notes,
            
        })

        const saveService = newService.save()

        if (saveService) {
            return res.status(200).json({ message: "Service created succesfully" })
        }
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchService = async(req, res) => {
    try {
        const Service = await Services.find({});
        if (Service) {
            return res.status(200).json(Service)
        }
    } catch (error) {
        return res.status(400).json(error)

    }
}