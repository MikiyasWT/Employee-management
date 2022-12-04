//import * as types from "../types"
import * as types from "../types"

export function getEmployees(employees) {
 return {
  type: types.GET_EMPLOYEES_REQUESTED,
  payload: employees,
 }
}


// export function getEmployeeById(employees)
// {
//     return {
//         type:types.GET_EMPLOYEE_BY_ID_REQUESTED,
//         payload:employees,
//     }
// }
