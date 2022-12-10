import React, { useEffect } from 'react'
import styled from 'styled-components'
import {FaFemale,FaMale,FaPowerOff,FaPlusCircle,FaTrash,FaUserCircle,FaUserEdit} from 'react-icons/fa'

import { useDispatch,useSelector } from "react-redux/es/exports";
import { getEmployees,deleteEmployee} from '../redux/actions/employees'
import {showSideBar} from "../redux/actions/sideBar"
import {showEditSideBar} from "../redux/actions/editSideBar"
import ReactLoading from "react-loading";


const TableWrapper = styled.div`
  position: relative;
  top:10%;
  display:flex;
  flex-direction:column;
  margin: 0rem 0rem;
  padding: 2rem 8rem;



  table {
    width:100%;
    border:solid whitegrey 2px;
    border-radius: 25px;
    justify-self: center;
    padding: 1rem 0rem;
    background: #282c34;
  }

  

  thead,tfoot {
    margin: 3rem 0.5rem;
    background: #282c34;
    color:white;
  }

tfoot > tr > td {
  border-top:solid grey 2px;
  
}

  tbody > tr > td {
    padding:0.5rem 4rem;
    border-top:solid grey 1px;
    color:white;
    text-transform:uppercase;
    font-size:11px;
  }



  @media only screen and (max-width: 700px) {

  position: relative;
  top:10%;
  display:flex;
  flex-direction:column;
  margin: 0rem 0rem;
  padding: 2rem 0rem;
  margin-left:0px;

  table {
    width:50%;
    border:solid whitegrey 2px;
    border-radius: 0px;
    padding: 1rem 0rem;
    background: #282c34;
  }

  }

  @media only screen and (max-width: 500px) {
    margin-left:0px;
  }
`;


export const FormButtons = styled.button`
    background:${props => props.color};
    color:white;
    font-size:1rem;
    padding:1.2rem 0.7rem;
    padding-top: 0.2rem;
    margin:0rem 0rem;
    cursor:pointer;
    border:none;
    border-radius:3px;
    max-height:1vh;
   
  `;

  export const LoadingEffectConatiner = styled.div`
  position:absolute;
  left:40%;
  `;

export default function EmployeesTable(){
  
  const dispatch = useDispatch()
  const employees = useSelector(state => state.employees.employees)
  const editSideBarStatus = useSelector(state => state.editSideBar.editSideBar)
 
  const sidebarStatus = useSelector((state) => state.sideBar.sideBar)
  const loading = useSelector(state => state.employees.loading)
  const error = useSelector(state => state.employees.error)
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch,employees])


    return(
      <>
      <TableWrapper>
       <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Salary</th>
          <th>Edit</th>
          <th>Remove</th>
          </tr>
        </thead>
          <tbody>
          
          { employees.length === 0 && loading === true ? <LoadingEffectConatiner><ReactLoading type="spin" color="#0000FF" 
          height={100} width={300} /></LoadingEffectConatiner>: null }
          { error === 0 && !loading === true ? <p>{error.message}</p> : null }
           {
            employees != null && employees.map((employee,index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.dob.substr(0,10)}</td>
              <td>{employee.salary}</td>
              <td><FormButtons color="blue" onClick={() => {dispatch(showEditSideBar(editSideBarStatus,employee))}}><span><FaUserEdit /></span></FormButtons></td>
              <td><FormButtons color="red" onClick={() => {dispatch(deleteEmployee(employee))}}><span><FaTrash /></span></FormButtons></td>
           </tr>
            ))
           }

            
          </tbody>

         <tfoot>
         <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
         </tfoot> 
        
       
       </table>
      </TableWrapper>
     </> 
    );
}
