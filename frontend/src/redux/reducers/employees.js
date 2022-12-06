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

    default:
      return state;
  }
}