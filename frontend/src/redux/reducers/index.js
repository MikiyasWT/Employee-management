import { combineReducers } from "redux";
import Employees from "./employees";
import SideBar from "./sideBar"

const rootReducer = combineReducers({
 //All reducers will be here
 employees: Employees,
 sideBar:SideBar,
});
export default rootReducer