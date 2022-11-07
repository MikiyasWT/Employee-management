const express = require('express')
const router = express.Router();

let Employee = require('../models/employee.model')


router.get('/',(req,res) => {
    Employee.find()
         .then(employees => res.json(employees))
         .catch(err => res.status(400).json('Error:' + err))
})



router.get('/:id',(req,res) => {
    Employee.findById(req.params.id)
      .then(exercise => res.json(exercise))
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

router.patch('/:id',(req,res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            employee.name = req.body.name;
            employee.dob = Date.parse(req.body.dob);
            employee.gender = req.body.gender;
            employee.salary = Number(req.body.salary)


            employee.save()
                .then(() => res.json('Employee Updated'))
                .catch(err => res.status(400).json('Error:' + err))
        })
        .catch(err => res.status(400).json('Error:' + err))
})


router.delete('/:id',(req,res) => {
        Employee.findByIdAndDelete(req.params.id)
            .then(() => res.json('Employee deleted'))
            .catch(err => res.status(400).json('Error:' + err))
})


module.exports = router;


