const express = require('express');

const router = express.Router();


const { createPatient,fetchPatients,updatePatient, deletePatient} = require('../Controllers/patient')

router.post('/createPatient', createPatient)
router.get('/fetchPatients', fetchPatients)
router.put('/updatePatient/:id', updatePatient)
router.delete('/deletePatient/:id', deletePatient)


module.exports = router;