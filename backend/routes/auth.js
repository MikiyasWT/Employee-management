const express = require('express');
const router = express.Router();
let User = require('../models/users.model')
const {registrationValidation,loginValidation} = require('../validation/userValidation')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerUser,login} = require('../controllers/users')


router.post('/register',registerUser)

router.post('/login',login)



module.exports = router;