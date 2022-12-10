import { combineReducers } from "redux";
import Employees from "./employees";
import SideBar from "./sideBar"
import EditSideBar from "./editSideBar";

const rootReducer = combineReducers({
 //All reducers will be here
 employees: Employees,
 sideBar:SideBar,
 editSideBar:EditSideBar
});
export default rootReducer