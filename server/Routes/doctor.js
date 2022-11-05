const express = require('express');

const router = express.Router();


const { createDoctor, fetchDoctor } = require('../Controllers/doctor')

router.post('/createDoctor', createDoctor);
router.get('/fetchDoctor', fetchDoctor);

module.exports = router;