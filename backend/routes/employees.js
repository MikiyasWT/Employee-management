const express = require('express');
const { getEmployees,getEmployee, addEmployee,editEmployee, removeEmployee  } = require('../controllers/employees');
const router = express.Router();

let Employee = require('../models/employee.model')


router.get('/',getEmployees)

router.get('/:id',getEmployee)

router.post('/',addEmployee)

router.patch('/:id',editEmployee)

router.delete('/:id',removeEmployee)


module.exports = router;


