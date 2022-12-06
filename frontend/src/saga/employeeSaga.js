import axios from "axios";
import {getEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee} from "../apis/index"
import { call, put, takeEvery,StrictEffect } from 'redux-saga/effects';
//const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiUrl = 'http://localhost:5000/employees'

function getListOfEmployees() {
    return fetch(apiUrl).then(response => response.json().catch(error => error));
}

function addNewEmployee(employee){
    //return addEmployee({employee}).then(response => response.json().catch(error => error));
    console.log("inside add employee")
    console.log(employee)
    return fetch(apiUrl, 
         {method: "POST",
       
         body: JSON.stringify({
            name:employee.name,
            dob:employee.dob,
            gender:employee.gender,
            salary:employee.salary
         }),
         headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }, 
         }).then(response => response.json().catch(error => error));



}

function* fetchEmployees(action) {
 try {
  const employees = yield call(getListOfEmployees);
  yield put({ type: 'GET_EMPLOYEES_SUCCESS', employees: employees });
 } catch (error) {
  yield put({ type: 'GET_EMPLOYEES_FAILED', message: error.message });
 }
}


function* registerNewEmployee(action){
    const employee = action.payload
    
    try {
        const addedEmployee = yield call(addNewEmployee(employee));
        //const employees = yield call(getListOfEmployees);
        yield put({ type: 'ADD_NEW_EMPLOYEE_SUCCESS', employee: addedEmployee });
    } catch (error) {
        yield put({ type: 'ADD_NEW_EMPLOYEE_FAILED', message: error.message });
    }
}

//type safety it will only retrun yield 
//function* employeeSaga:Generator<StrictEffect>() {
function* employeeSaga() {
 yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees);
 yield takeEvery('ADD_NEW_EMPLOYEE_REQUESTED', registerNewEmployee);
}

export default employeeSaga;