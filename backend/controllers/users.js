let User = require('../models/users.model')
const {registrationValidation,loginValidation} = require('../validation/userValidation')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req,res)=>{
    //deprecated method
    //const {error }  =  Joi.validate(req.body,schema)
  const {error} = registrationValidation(req.body)
  if(error) return res.status(422).send(error.details[0].message)

  const emailExists =await  User.findOne({email:req.body.email})
  if(emailExists) return res.status(422).send('Email already exists')

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password,salt)

  const user = new User({
  name:req.body.name,
  email:req.body.email,
  password:hashPassword
 })

 try{
     const registeredUser = await user.save()
     res.status(201).send( {user:user._id})
 }
 catch(err){
  res.status(422).send(err)
 }
}




const login = async (req,res)=>{
    const {error} = loginValidation(req.body)
    if(error) return res.status(422).json(error.details[0].message)

    const user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).json('Invalid Email or Password')

    const isValidPassword = await bcrypt.compare(req.body.password,user.password)

    if(!isValidPassword) return res.status(401).json('Invalid Email or Password')

    const token = jwt.sign({id:user._id,username:user.name},process.env.TOKEN_SECRET)
    
    res.header('auth-token',token,process.env.TOKEN_SECRET).send(token)
    
}



module.exports = {registerUser, login}