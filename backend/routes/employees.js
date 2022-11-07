const express = require('express')
const router = express.Router();

let Employee = require('../models/employee.model')


router.get('/',(req,res) => {
    Employee.find()
         .then(employees => res.json(employees))
         .catch(err => res.status(400).json('Error:' + err))
})


router.post('/',(req,res) => {

    const name = req.body.name;
    const  dob = Date.parse(req.body.dob);
    const gender = req.body.gender;
    const salary =  Number(req.body.salary);

    const newEmployee = new Employee({
        name,
        dob,
        gender,
        salary
    });

    newEmployee.save()
      .then(() => res.json('New Employee Added'))
      .catch(err => res.status(400).json('Error:' + err));
})

router.patch('/',(req,res) => {
    
})


router.delete('/',(req,res) => {
    
})


module.exports = router;






// const express = require('express')
// const mongoose = require('mongoose')
// const Employee = require('../models/employee.model')

// const router = express.Router();

// router.get('/',(req,res) => {
//     Employee.find()
//         .then(employees => res.json(employees))
//         .catch(err => res.status(400).json('Error:' + err))
// })


// router.post('/',(req,res) => {
//     const employee = new Employee({
//         name:req.body.name,
//         dob:req.body.dob,
//         gender:req.body.gender,
//         salary:req.body.salary
//     })
    

//     employee.save()
//             .then(() => res.json('newm employee added'))
//             .catch(err => res.status(400))
// })

// module.exports  = router
