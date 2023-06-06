const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {regUser, loginUser,getUser} = require('../controllers/userController');

router.post('/', regUser)
router.post('/login', loginUser)
router.get('/view',protect, getUser)


module.exports = router