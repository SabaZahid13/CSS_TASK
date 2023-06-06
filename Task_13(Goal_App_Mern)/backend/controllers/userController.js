const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//public , Post method, route: api/users
const regUser =  asyncHandler(async(req, res) => {
     //res.json({message:'Register!'});
     const { name, email, password } = req.body
     if (!name || !email || !password) {
        res.status(400)
        throw new Error('All fields are required!')
     }

     // Check if user exists
     const userExists = await User.findOne({email})
     if (userExists) {
        res.status(400)
        throw new Error('User already exists')
     }
      // Hash the  password with bcrypt
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password, salt)

      // Create a user using create method
     const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            
        })
    } else {
        res.status(400)
        throw new Error('Invalid!')
    }
    //res.json({message:'Register!'}); 

});
//public , Post method, route: api/users/login
const loginUser =  asyncHandler(async(req, res) => {
    //res.json({message:'Login!'});  
    const { email, password } = req.body

    // match email
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid!')
    }
                
});

//public , Post method, route: api/users/view
const getUser =  asyncHandler(async(req, res) => {
     //res.json({message:'View!'});
    res.status(200).json(req.user)
       
});
//generate jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '20d',
    })
  }

module.exports = {regUser,loginUser,getUser,}