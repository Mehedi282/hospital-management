const express = require('express');

const router = express.Router();


const { createService ,fetchService} = require('../Controllers/services')

router.post('/createService', createService);
router.get('/fetchService', fetchService);

module.exports = router;