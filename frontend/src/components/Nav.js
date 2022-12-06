
import { useState } from "react";
import {NavStyles, NavItems} from "../styles/NavStyles"
import SideBar from "./RightSideBar";
//import {showSideBar} from "../features/sideBar"
import { useDispatch,useSelector } from "react-redux/es/exports";
import {FaFemale,FaMale,FaPowerOff,FaPlusCircle,FaTrash,FaUserCircle,FaUserEdit} from 'react-icons/fa'
import {showSideBar} from "../redux/actions/sideBar"



export default function Nav(){
  

  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sideBar.sideBar)
  
  return(
        <NavStyles>
          <h3>Employee Management </h3>
          <NavItems>
            <a href="#" onClick={() => {dispatch(showSideBar(sidebarStatus))}}><FaPlusCircle /> Employee</a>
            <a><FaPowerOff /></a>
          </NavItems>
         
          {
            sidebarStatus && <SideBar />
          }
        </NavStyles>
    );
}

