import * as type from '../types';

const initialState = {
 employees: [],
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
    default:
      return state;
  }
}