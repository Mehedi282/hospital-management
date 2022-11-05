const express = require('express');

const router = express.Router();


const { createAppointment, fetchAppointment } = require('../Controllers/appointment')

router.post('/createAppointment', createAppointment);
router.get('/fetchAppointment', fetchAppointment);

module.exports = router;