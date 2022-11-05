const express = require('express');

const router = express.Router()


const {createWard, fetchWard} = require('../Controllers/ward');

router.post('/createWard', createWard);
router.get('/fetchWard', fetchWard);

module.exports = router;