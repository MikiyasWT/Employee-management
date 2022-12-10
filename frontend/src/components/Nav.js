
import {NavStyles, NavItems} from "../styles/NavStyles"
import SideBar from "./RightSideBar";
import EditSideBar from "./EditForm";
import { useDispatch,useSelector } from "react-redux/es/exports";
import {FaPowerOff,FaPlusCircle} from 'react-icons/fa'
import {showSideBar} from "../redux/actions/sideBar"



export default function Nav(){
  

  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sideBar.sideBar)
  const editSideBarStatus = useSelector((state) => state.editSideBar.editSideBar)
  return(
        <NavStyles>
          <h3>Employee Management </h3>
          <NavItems>
            <a href="#" onClick={() => {dispatch(showSideBar(sidebarStatus))}}><FaPlusCircle /> Employee</a>
            <a><FaPowerOff /> Logout</a>
          </NavItems>
          {
            editSideBarStatus && <EditSideBar />
          }
          {
            sidebarStatus && <SideBar />
          }
        </NavStyles>
    );
}

