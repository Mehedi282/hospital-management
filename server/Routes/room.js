const express = require('express');

const router = express.Router();


const { createRoom, fetchRoom } = require('../Controllers/room')

router.post('/createRoom', createRoom)
router.get('/fetchRoom', fetchRoom)

module.exports = router;