
import styled from 'styled-components'



const TableWrapper = styled.div`
  position: relative;
  
  top:10%;
  display:flex;
  flex-direction:column;
  margin: 0rem 0rem;
  padding: 2rem 8rem;



  table {
    width:100%;
    border:solid grey 2px;
    color:green;
    justify-self: center;
    padding: 1rem 0rem;
  }

  thead,tfoot {
    margin: 2rem 0.5rem;
  }


  tbody > tr > td {
    padding:0.5rem 4rem;
  }

  


`;

//<FontAwesomeIcon  icon="fa-solid fa-user-pen"  />

export default function EmployeesTable(){

    return(
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
            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><button>Edit</button></td>
                <td><button>Remove</button></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><button>Edit</button></td>
                <td><button>Remove</button></td>
            </tr>
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
    );
}
