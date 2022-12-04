
import { useState } from "react";
import {NavStyles, NavItems} from "../styles/NavStyles"
import SideBar from "./RightSideBar";
//import {showSideBar} from "../features/sideBar"
import { useDispatch,useSelector } from "react-redux/es/exports";
import {FaFemale,FaMale,FaPowerOff,FaPlusCircle,FaTrash,FaUserCircle,FaUserEdit} from 'react-icons/fa'
//import {showSideBar} from "../redux/reducers/sideBar"
import store from "../redux/store"



export default function Nav(){
  const isShowSideBarTrue = useSelector((state) => state.sideBar.sideBar)
  console.log(isShowSideBarTrue)
  const dispatch = useDispatch();
  return(
        <NavStyles>
          <h3>Employee Management </h3>
          <NavItems>
            <a href="#" ><FaPlusCircle /> Employee</a>
            <a><FaPowerOff /></a>
          </NavItems>
         
          {
            isShowSideBarTrue && <SideBar />
          }
        </NavStyles>
    );
}

