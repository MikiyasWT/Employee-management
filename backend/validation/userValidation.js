const Joi = require('@hapi/joi');

const registrationValidation = (data) => {
    const userSchema = Joi.object({

        name:Joi.string()
              .min(6)
              .required(),
        email:Joi.string()
              .min(8)
              .required()
              .email(),
       password:Joi.string()
              .min(8)
              .required()
  
  })

  return userSchema.validate(data)
}


const loginValidation = data => {
       const schema = Joi.object({
           email:Joi.string()
              .min(8)
              .required()
              .email(),
           password:Joi.string()
              .min(8)
              .required() 
       })

       return schema.validate(data)
}

module.exports.registrationValidation = registrationValidation
module.exports.loginValidation = loginValidation