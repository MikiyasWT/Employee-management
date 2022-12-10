import * as type from '../types';

const initialState = {
 employees: [],
 employee: [],
 loading: false,
 error: null
}



export default function employees(state=initialState, action) {
  switch (action.type) {
    case type.GET_EMPLOYEES_REQUESTED:
       return {
        ...state,
        loading: true
      }
    case type.GET_EMPLOYEES_SUCCESS:
       return {
        ...state,
        loading: false,
        employees: action.employees
      }
    case type.GET_EMPLOYEES_FAILED:
       return {
        ...state,
        loading: false,
        error: action.message
      }

  
      case type.ADD_NEW_EMPLOYEE_REQUESTED: 
        return {
            ...state,
            loading: true,
            employee:action.payload
        }

      case type.ADD_NEW_EMPLOYEE_SUCCESS: 
        return {
            ...state,
            loading: false,
            employees: [...employees,action.payload.values],
            
        }
      

    case type.ADD_NEW_EMPLOYEE_FAILED: 
        return {
          ...state,
          loading: false,
          error: action.message
      }


  

      case type.UPPDATE_EMPLOYEE_BY_ID_REQUESTED:
        let employeeToBeUppdated = action.payload
        
        return {
        ...state,
        loading:true,
        employee:state.employees.filter(e => (e === employeeToBeUppdated ? employeeToBeUppdated:e))

        }  

      case type.UPPDATE_EMPLOYEE_BY_ID_SUCCESS: 
        return {
            ...state,
            loading: false,
            employees: [...employees,action.payload.values],
            
        } 
        
        case type.UPPDATE_EMPLOYEE_BY_ID_FAILED: 
        return {
          ...state,
          loading: false,
          error: action.message
      } 

      case type.DELETE_EMPLOYEE_BY_ID_REQUESTED:
        let employeeToBeDeleted
        return {
          ...state,
          loading:true,
          employee:state.employees.filter(e => (e !== employeeToBeDeleted ? employeeToBeDeleted:e))
        }

      default:
        return state;
  }
}


//employee:employees.find(e => (e === employeeToBeUppdated ? employeeToBeUppdated:e))

// case GET_SINGLE_PRODUCT: {
//   return {
//       ...state,
//       productList: [...action.payload],
//   }
// }



// case DELETE_EMPLOYEE_BY_ID: {
//   return {
//       ...state,
//       productList: [...action.payload],
//   }
// }
// case UPDATE_PRODUCT: {
//   return {
//       ...state,
//       productList: [...action.payload.values],
//   }
// }