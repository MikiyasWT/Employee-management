import axios from "axios";
//import {getEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee} from "../apis/index"
import { call, put, takeEvery,StrictEffect } from 'redux-saga/effects';
//const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiUrl = 'http://localhost:5000/employees'

function getListOfEmployees() {
    return fetch(apiUrl).then(response => response.json().catch(error => error));
}
function deleteEmployeeByIdApi(employee){
    
    return fetch(apiUrl+`/${employee._id}`, {method: "DELETE",
     headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, 
     }).then(response => response.json().catch(error => error));
}


function* deleteEmployee(action){
    const employeeToBeDeleted = action.payload;
    
    try {
        const employeeDeleted = yield call(deleteEmployeeByIdApi(employeeToBeDeleted));
        yield put({ type: 'DELETE_EMPLOYEE_BY_ID_SUCCESS', employee: employeeDeleted });
    } catch (error) {
        yield put({ type: 'DELETE_EMPLOYEE_BY_ID_FAILED', message: error.message });
    }
}


function addNewEmployee(employee){
   
    return fetch(apiUrl, {method: "POST",body: JSON.stringify({
            name:employee.name,
            dob:employee.dob,
            gender:employee.gender,
            salary:employee.salary}),
         headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }, 
         }).then(response => response.json().catch(error => error));
}

function updateEmployeeApi(employee){
   
    return fetch(apiUrl+`/${employee._id}`, {method: "PATCH",body: JSON.stringify({
        name:employee.name,
        dob:employee.dob,
        gender:employee.gender,
        salary:employee.salary}),
     headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, 
     }).then(response => response.json().catch(error => error));
}

function* updateEmployee(action){
    const employeeToBeUppdated = action.payload;
    
    try {
        const employeeUpdated = yield call(updateEmployeeApi(employeeToBeUppdated));
        yield put({ type: 'UPPDATE_EMPLOYEE_BY_ID_SUCCESS', employee: employeeUpdated });
    } catch (error) {
        yield put({ type: 'UPPDATE_EMPLOYEE_BY_ID_FAILED', message: error.message });
    }
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
 yield takeEvery('UPPDATE_EMPLOYEE_BY_ID_REQUESTED',updateEmployee) ;
 yield takeEvery('DELETE_EMPLOYEE_BY_ID_REQUESTED',deleteEmployee)
}

export default employeeSaga;