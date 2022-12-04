import axios from "axios"

axios.default.baseurl = "http://localhost:5000"


export const getEmployeese = async () => axios.get('/employees')

export const getEmployeeById = async (id) => axios.get('/employees/${id}')

export const addEmployee = async (employee) => axios.post('/employees',employee)

export const updateEmployee = async(employee) => axios.patch('/employees/${id}',employee)

export const deleteEmployee = async(id) => axios.delete('/employees/${id}')