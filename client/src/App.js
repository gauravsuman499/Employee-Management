import "./App.css";
import ReactDOM from "react-dom/client";
// import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';
// import Login from './Pages/Login';
// import Dashboard from './Pages/Dashboard';
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import EmployeeList from "./Components/EmployeeList/EmployeeList";
import AddNewEmployee from "./Components/AddEmployee/AddNewEmployee";
import EditEmployee from "./Components/EditEmployee/EditEmployee";
// import DeleteEmployee from './Components/DeleteEmployee/DeleteEmployee';
import { DeleteEmployee } from "./Components/DeleteEmployee/DeleteEmployee";

// import React, { useState } from 'react';
// import LoginForm from './Components/Login/LoginForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
// import EmployeeList from './Pages/Dashboard';
// import EmployeeDetail from "./Pages/UserDashboard";
// import EmployeeForm from './Pages/EmployeeForm';
// import EmployeeEditForm from './Pages/EditEmployee';
// import DeleteEmployee from './Pages/DeleteEmployee'
import API from "./services/api";

// import logo from './logo.svg';
// import './App.css';
//
// function App() {
// return (
// <div className="App">
{
  /* <header className="App-header"> */
}
{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}
{
  /* <p> */
}
{
  /* Edit <code>src/App.js</code> and save to reload. */
}
{
  /* </p> */
}
{
  /* <a */
}
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
{
  /* Learn React */
}
{
  /* </a> */
}
{
  /* </header> */
}
{
  /* </div> */
}
// );
// }
//
// export default App;
//

function App() {
  // const [view, setView] = useState('list');
  // const [selectedId, setSelectedId] = useState(null);

  // const handleDashboard = () =>{
  //   setView('list') ;
  // }

  // const handleSelect = (id) =>{
  //   setSelectedId(id);
  //   // alert('hellow world');
  //   // alert(id);
  //   // <Route path='/employees/:id' element={<EmployeeDetail/>} />
  //   <link path='/employees/:id' element={<EmployeeDetail/>}/>
  //   // alert(id);

  //   // setView('detail') ;
  // }

  // if(view === 'login')
  //   return <Login onLogin={() => setView('list')} />;
  // if(view === 'list')
  //   return <EmployeeList onSelect = {handleSelect}  onAdd={() => setView('form')} />;

  // if(view === 'detail')
  //   return <EmployeeDetail id={selectedId} />;

  // if(view === 'form')
  //   return <EmployeeForm />

  // return null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeList />} />
        {/* <Route path="/employees/:id" element={<EmployeeDetail />} /> */}
        <Route path="/employees/addEmployee" element={<AddNewEmployee />} />
        <Route path="/employees/edit/:id" element={<EditEmployee />} />
        <Route path="/employees/delete/:id" element={<DeleteEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
