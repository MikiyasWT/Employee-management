//import * as types from "../types"
import * as types from "../types"

export function getEmployees(employees) {
 return {
  type: types.GET_EMPLOYEES_REQUESTED,
 }
}




export function addEmployee(employee){
    return {
            type:types.ADD_NEW_EMPLOYEE_REQUESTED,
            payload:employee,
        }

}

export function getSingleEmployee(id){
    
    return{
        type:types.GET_EMPLOYEE_BY_ID_REQUESTED,
        payload: id,
      }

}


export function updateEmployee(employee) {
   
    return {
        type:types.UPPDATE_EMPLOYEE_BY_ID_REQUESTED,
        payload:employee
    }
}


export function deleteEmployee(employee) {
   
    return {
        type:types.DELETE_EMPLOYEE_BY_ID_REQUESTED,
        payload:employee
    }
}






