// const Joi = require('@hapi/joi');
// const now = new Date.now();
// //to set minimum permitted age for employability
// const minmumAgeToWork = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18))

// //max age before retirement
// const maximumAgeToWork = new Date(now - (1000 * 60 * 60 * 24 * 365 * 64))

// const employeeValidation = (data) => {
//      const employeeSchema = Joi.object({
    
//         name:Joi.string()
//                 .min(3)
//                 .max(30)
//                 .required(),
//         dob:Joi.date()
//                 .max(maximumAgeToWork)
//                 .min(minmumAgeToWork)
//                 .required(),
//         gender:joi.string()
//                 .valid('male','female')
//                 .required(), 
//         salary:joi.number()
//                   .min(1000)
//                   .max(100000)
//                   .required()       

  
//   })

//   return employeeSchema.validate(data)
// }


// module.exports.employeeValidation = employeeValidation