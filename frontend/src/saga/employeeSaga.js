import { call, put, takeEvery,StrictEffect } from 'redux-saga/effects';
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
//const apiUrl = 'http://localhost:5000/employees'
function getListOfEmployees() {
 return fetch(apiUrl).then(response => response.json().catch(error => error));
}

function* fetchEmployees(action) {
 try {
  const employees = yield call(getListOfEmployees);
  yield put({ type: 'GET_EMPLOYEES_SUCCESS', employees: employees });
 } catch (error) {
  yield put({ type: 'GET_EMPLOYEES_FAILED', message: error.message });
 }
}

//type safety it will only retrun yield 
//function* employeeSaga:Generator<StrictEffect>() {
function* employeeSaga() {
 yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees);
}

export default employeeSaga;