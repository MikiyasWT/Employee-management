const express = require('express');
const { getEmployees,getEmployee, addEmployee,editEmployee, removeEmployee  } = require('../controllers/employees');
const router = express.Router();
const verify = require('../middleware/verifyToken')


router.get('/',verify,getEmployees)

router.get('/:id',verify, getEmployee)

router.post('/',verify,addEmployee)

router.patch('/:id',verify, editEmployee)

router.delete('/:id',verify, removeEmployee)


module.exports = router;


