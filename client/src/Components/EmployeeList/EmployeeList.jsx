import React, { useEffect, useState } from "react";
import API from "../../services/api";
// import './EmployeeList.css';
import Dashboard from "../Dashboard/Dashboard";
import EmployeeEdit from "../EditEmployee/EditEmployee";
// import DeleteEmployee from '../DeleteEmployee/DeleteEmployee';
import { DeleteEmployee } from "../DeleteEmployee/DeleteEmployee";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TablePagination,
  alpha,
  TableSortLabel,
  Toolbar,
  Typography,
  Checkbox,
  Tooltip,
  FormControlLabel,
  Switch,
  FilterListIcon,
  Button,
} from "@mui/material";

import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const EmployeeList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };

  useEffect(() => {
    API.get(`/`).then((res) => setEmployees(res.data));
  }, []);

  const NewEmployee = () => {
    navigate("/employees/addEmployee");
  };

  // const onSelect = (Id) =>{
  //     navigate(`/employees/${Id}`);
  // }
  const paginatedRows =
    rowsPerPage > 0
      ? employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : employees;

  const hanldeEditEmployee = (id) => {
    // console.log(`Id is: ${id}`);

    navigate(`/employees/edit/${id}`);
  };

  const handleReturnToDashboard = () => {
    navigate(`/dashboard`);
  };

  const handleDeleteEmployee = async (id) => {
    // console.log("1");
    // DeleteEmployee(id);
    // console.log("2");

    // const handleDelete =  async() =>{
    // event.preventDefault();

    const userConfirmed = window.confirm(
      "Are you sure, you want to delete this record?"
    );

    if (userConfirmed) {
      try {
        const response = await API.delete(`/${id}`);
        // setFormData(response.data);
        // console.log(`response is: ${response.data}`);
        alert("Employee deleted successfully");
        // navigate('/employees');
      } catch (error) {
        console.error("Error deleting employee:", error);
      }

      // const response = await API.delete(`/${id}`);
      // console.log(`Response: ${response}`);
    } else {
      alert(`Delete operation can not be performed`);
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex", marginTop: "10px", marginBottom: "50px" }}>
        {/* <Button className="add-employee" onClick={NewEmployee}>Add New Employee</button> */}
        <Button
          variant="contained"
          color="success"
          style={{ display: "flex", margin: "auto" }}
          onClick={NewEmployee}
        >
          Add New Employee
        </Button>
      </Box>
      <Box>
        <TableContainer
          component={Paper}
          style={{ display: "flow", margin: "auto" }}
        >
          {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                        'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell> */}
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date Of Birth</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell colSpan={2} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                ))} */}

              {/* {employees.map((emp) => ( */}
              {paginatedRows.map((emp) => (
                <TableRow
                  key={emp.id}
                  // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* // <tr key = {emp.Id} onClick={() => onSelect(emp.Id)}> */}
                  {/* <tr> */}
                  <TableCell>{emp.id}</TableCell>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.phoneNo}</TableCell>
                  <TableCell>{emp.department}</TableCell>
                  <TableCell>{emp.salary}</TableCell>
                  <TableCell>{emp.status}</TableCell>
                  <TableCell>{emp.dob}</TableCell>
                  <TableCell>{emp.gender}</TableCell>
                  <TableCell
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {/* <TableCell paddingLeft={"0"}> */}
                    {/* <Box paddingLeft={"0"}> */}
                    {/* <span><button  style={{paddingLeft: "0"}} onClick={()=> hanldeEditEmployee(emp.id)}>Edit</button> </span> */}
                    <span>
                      <Button
                        variant="contained"
                        color="primary"
                        //  style={{paddingLeft: "0"}}
                        //  size="small"
                        endIcon={<EditIcon />}
                        onClick={() => hanldeEditEmployee(emp.id)}
                      >
                        Edit
                      </Button>
                    </span>
                    {/* <button onClick={()=> hanldeEditEmployee(emp.id)}>Edit</button> */}
                    {/* </TableCell> */}

                    {/* <TableCell> */}
                    <span>
                      <Button
                        color="error"
                        variant="contained"
                        //  size="small"
                        endIcon={<DeleteIcon />}
                        //  style={{paddingLeft: "0"}}
                        onClick={() => handleDeleteEmployee(emp.id)}
                      >
                        Delete
                      </Button>
                    </span>
                    {/* <button onClick={()=> handleDeleteEmployee(emp.id)}>Delete</button> */}
                    {/* </TableCell> */}
                    {/* </Box> */}
                    {/* </TableCell> */}
                  </TableCell>
                  {/* </tr> */}
                  {/* //  </tr> */}
                </TableRow>
              ))}
            </TableBody>

            {/*             
        <div className="emp-div">
            <button className="add-employee" onClick={NewEmployee}>Add New Employee</button>
            <h1 id="emp-list" >Employees List</h1>
            <table className="employee-table" border={10}>
                <thead id="etable-head">
                    <tr>
                        <th>Id</th>
                        <th>Name</th> 
                        <th>Email</th> 
                        <th>PhoneNo</th> 
                        <th>Department</th> 
                        <th>Salary</th> 
                        <th>Status</th> 
                        <th>Date Of Birth</th> 
                        <th>Gender</th>
                        <th>ACTIONS</th> 
                        
                    </tr>
                </thead>
                    <tbody>
                        {employees.map(emp => (
                            // <tr key = {emp.Id} onClick={() => onSelect(emp.Id)}>
                            <tr>
                               <td>{emp.id}</td>
                               <td>{emp.name}</td>
                               <td>{emp.email}</td>
                               <td>{emp.phoneNo}</td>
                               <td>{emp.department}</td>
                               <td>{emp.salary}</td>
                               <td>{emp.status}</td>
                               <td>{emp.dob}</td>
                               <td>{emp.gender}</td>
                               <th>
                                    <tc>
                                        <span><button onClick={()=> hanldeEditEmployee(emp.id)}>Edit</button> </span>
                                    </tc>
                                    
                                    <tc>
                                        <span><button onClick={()=> handleDeleteEmployee(emp.id)}>Delete</button></span>
                                    </tc>
                               </th>
                             </tr>
                            //  </tr>
                        ))}
                    </tbody>
            </table> */}
            {/* <button onClick={handleReturnToDashboard}>Return To Dashboard</button> */}
            {/* <Dashboard /> */}
            {/* </div> */}
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          // count={rows.length}
          count={employees.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
        />
      </Box>
      {/* <button onClick={handleReturnToDashboard}>Return To Dashboard</button> */}
      <Button
        style={{ display: "flex", margin: "auto" }}
        variant="outlined"
        onClick={handleReturnToDashboard}
        color="error"
      >
        Return To Dashboard
      </Button>
    </div>
  );
};

export default EmployeeList;
