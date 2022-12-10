let Employee = require('../models/employee.model')
const {employeeValidation} = require('../validation/employeesValidation')

 const getEmployees = async (req,res) => {
    await Employee.find()
         .then(employees => res.json(employees))
         .catch(err => res.status(400).json('Error:' + err))
}

 const getEmployee = async (req,res) => {
    
     await Employee.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error:' + err))
}

 const addEmployee = async (req,res) => {
    
const {error} = employeeValidation(req.body)
if(error) return res.status(422).send(error.details[0].message)

   
    const {name, dob, gender, salary} = req.body
    const body = req.body

    const newEmployee = new Employee(body);

    await newEmployee.save()
      .then(() => res.json('New Employee Added'))
      .catch(err => res.status(400).json('Error:' + err));
}


 const editEmployee = async (req,res) => {
    const {name,dob,gender,salary} = req.body;

    const isEmployee = await Employee.findById(req.params.id).exec()

    if(!isEmployee) return res.status(400).json('Employee not found')

    let query = {$set: {}};
    for (let key in req.body) {
    if (isEmployee[key] && isEmployee[key] !== req.body[key]) // if the field we have in req.body exists, we're gonna update it
       query.$set[key] = req.body[key];

       }

    const updatedEmployee = await Employee.updateOne({_id: req.params.id}, query);

    res.send(updatedEmployee);

}


 const removeEmployee = async (req,res) => {
   

    await Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted'))
        .catch(err => res.status(400).json('Error:' + err))
}





module.exports = { getEmployees,getEmployee, addEmployee,editEmployee, removeEmployee };
