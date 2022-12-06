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


// export function getEmployeeById(employees)
// {
//     return {
//         type:types.GET_EMPLOYEE_BY_ID_REQUESTED,
//         payload:employees,
//     }
// }
