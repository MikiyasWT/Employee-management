import React ,{useEffect} from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import EmployeesTable from './components/EmployeesTable'
import Footer from './components/Footer';
import GlobalStyles from './styles/globalStyles';
//import {data} from "./data/fakedata"


function App() {

  return (
    <div>
      <GlobalStyles />
      <header>
        <Nav />
      </header>
      <div>
       <EmployeesTable />
      </div>
      <Footer />
    </div>

  );
}

export default App;
