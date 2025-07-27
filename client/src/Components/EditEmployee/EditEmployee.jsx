import API from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import "./EditEmployee.css";

import {
  Box,
  Container,
  Paper,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  Typography,
  Switch,
  InputAdornment,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Button,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function EmployeeEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  // const [formData, setFormData] = useState({name: '', email: '', phoneNo:'',department:'',salary:'', status:'', dob:'dob' , gender:'' });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("Active");
  // const [dob, setDob] = useState(dayjs('2022-04-17'));
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [isToggled, setIsToggled] = useState(true);
  // const [errors, setErrors] = useState("");

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // console.log(formData, "Gelel:");

  useEffect(() => {
    const fetchEmployeedata = async () => {
      // event.preventDefault();
      // console.log(`Id is: ${id}`);
      const employeeData = await API.get(`/${id}`);
      console.log(employeeData.data);
      // console.log(employeeData.data.department);

      // setFormData(employeeData.data);
      setName(employeeData.data.name);
      setEmail(employeeData.data.email);
      setPhoneNo(employeeData.data.phoneNo);
      setDepartment(employeeData.data.department);
      setSalary(employeeData.data.salary);
      setStatus(employeeData.data.status);
      setDob(dayjs(employeeData.data.dob));
      setGender(employeeData.data.gender);

      // console.log(`Employee Data: ${formData}`);

      if (employeeData.data.status === "Active") {
        setIsToggled(true);
      }
      if (employeeData.data.status === "Inactive") {
        setIsToggled(false);
      }

      // console.log(`Data : ${employeeData.data.status}`);
    };
    fetchEmployeedata();
    // alert('Edit Employee Called');
  }, [id]);

  const handleToggle = (value) => {
    // console.log(value, 'value123')
    setIsToggled(value);
    console.log(`data: ${value}`);

    if (!value) {
      // setStatus('Inactive');
      // setfo.status = 'Inactive';
      // setFormData((prevData) => ({ ...prevData, status: 'Inactive' }));
      // setStatus((prevData) => ({ ...prevData, status: 'Inactive' }));
      setStatus("Inactive");
    } else {
      // setStatus('Active');
      // formData.status = 'Active';
      // setFormData((prevData) => ({ ...prevData, status: 'Active' }));
      // setStatus((prevData) => ({ ...prevData, status: 'Active' }));
      setStatus("Active");
    }
    // console.log(status);
  };

  // const handleReturn =  (event) =>{
  //     event.preventDefault();
  //     navigate('/employees');
  // }

  // useEffect( () =>{
  //     API
  //     .get(`/${id}`)
  //     .then( res => setEmployee(res.data));
  // }, [id]);

  // const handleSubmit =  async(event) =>{
  //      event.preventDefault();
  //      const data = {
  //         name : name,
  //         email: email ,
  //         phoneNo: phoneNo,
  //         department:department,
  //         salary: salary,
  //         status: status,
  //         dob: dob,
  //         gender: gender
  //     };

  //     try{
  //         const response =  await API.put(`/${id}`, data);
  //         // setFormData(response.data);
  //         // console.log(`response is: ${response.data}`);
  //         // alert('Employee Details successfully updated');
  //         navigate('/employees');
  //     }catch(error){
  //         console.error('Error updating data:', error);
  //     }

  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      phoneNo: phoneNo,
      department: department,
      salary: salary,
      status: status,
      dob: dob,
      gender: gender,
    };

    try {
      // const response =  await API.put(`/${id}`, formData);
      const response = await API.put(`/${id}`, data);
      // setFormData(response.data);
      // console.log(`For data is: ${formData}`);

      // console.log(`response is: ${response.data}`);
      // alert('Employee Details successfully updated');
      window.alert("Successfully updated employee data");
      navigate("/employees");
    } catch (error) {
      window.alert(`Error updating employee data!`);
      console.error("Error updating data:", error);
    }
  };

  return (
    <Container maxWidth={"sm"} sx={{ backgroundColor: "lightgrey" }}>
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontSize={"xlarge"}
        >
          Edit Employee Details
        </Typography>

        <Box
          component={"form"}
          onSubmit={handleSubmit}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <TextField
            label="Name"
            type="name"
            value={name}
            // value={formData.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            // onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Email"
            type="email"
            value={email}
            // value={formData.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            // onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Phone No"
            type="phoneNo"
            value={phoneNo}
            // value={formData.phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            // onChange={handleChange}
            fullWidth
            required
          />

          <FormControl fullWidth>
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select
              // labelId="department-select-label"
              // id="department-select"
              value={department}
              // value={formData.department}
              label="Department"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              // onChange={handleChange}
            >
              {/* <MenuItem value={""}><em>Select a department</em></MenuItem> */}
              <MenuItem value={"Research"}>Research</MenuItem>
              <MenuItem value={"Development"}>Development</MenuItem>
            </Select>
            <FormHelperText>This is a required field!</FormHelperText>
          </FormControl>

          <TextField
            label="Salary"
            type="salary"
            value={salary}
            // value={formData.salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
            // onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Status"
            type="status"
            value={status}
            // value={formData.status}

            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isToggled}
                        onChange={(e) => {
                          handleToggle(e.target.checked);
                        }}
                      />
                    }
                    // control={<Switch checked={isToggled} onChange={(e)=>{handleToggle(e.target.checked)}} />}
                    label="Change Status"
                  />
                </InputAdornment>
              ),
            }}
            // onChange={(e) => {setIsToggled(e.target.value)}}
            fullWidth
            required
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Date Of Birth"
                value={dob}
                // value={formData.dob}
                onChange={(selectedDate) => setDob(selectedDate)}
                // onChange={(e) =>{setDob(e.target.value)}}
                // onChange={handleChange}
                // fullWidth
                // renderInput={(params) => <TextField {...params} fullWidth />}
                // renderInput={(params) => <TextField {...params} sx={{width: '100%'}} />}
                // <TextField fullWidth />
              />
            </DemoContainer>
          </LocalizationProvider>

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              {/* <RadioGroup aria-label="gender" name="gender" value={formData.gender} onChange={ handleChange}> */}
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            // loading
            // loadingPosition="end"
            // variant="outlined"
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Container>

    // <div>

    //     <h2>
    //         Edit Employee
    //     </h2>
    //     <form onSubmit={handleSubmit} >

    //         <div>
    //             <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br/>
    //         </div>
    //         <div>
    //             <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br/>
    //         </div>
    //         <div>
    //             <input name="phoneNo" placeholder="PhoneNo" value={formData.phoneNo} onChange={handleChange}  /><br/>
    //         </div>

    //         <div>
    //             <select id="deptDropdown" placeholder="Department" value={formData.department} onChange={handleChange}>
    //                 <option value={""}>Select a department</option>
    //                 <option value="Research">Research</option>
    //                 <option value="Development">Development</option>
    //             </select>
    //         </div>

    //         {/* <input name="department" placeholder="Department" value={department} onChange={(e) => {setDepartment(e.target.value)}} /><br/> */}
    //         <div>
    //             <input name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange}  /><br/>
    //         </div>
    //         {/* <input name="status" placeholder="Current Status" value={status} onChange={(e) =>{setStatus(e.target.value)}}  /><br/> */}

    //         <div>
    //             <p>Current Status: {formData.status}</p><br/>
    //             <label className="switch">
    //             <input type="checkbox" checked={isToggled} onChange={(e)=>{handleToggle(e.target.checked)}}/>
    //                 {/* {  !isToggled ? 'Inactive': 'Active'} */}
    //             <span className="slider round"></span>
    //             </label>

    //         </div>

    //         {/* <input name="dob" placeholder="Date Of Birth" value={dob} onChange={(e) =>{setSalary(e.target.value)}}  /><br/> */}

    //         <div>
    //             <input name="dob"  placeholder="Date Of Birth"  type="date" id="date-input" value={formData.dob} onChange={handleChange}/>
    //         </div>
    //         <div>
    //             <p>Gender:</p>
    //             <div>
    //             {/* <input name="gender" placeholder="Gender" value={gender} onChange={(e) =>{setSalary(e.target.value)}}  /><br/> */}
    //                 <input
    //                 type="radio"
    //                 id="Male"
    //                 name="gender"
    //                 value="Male"
    //                 checked = { formData.gender === 'Male'}
    //                 onChange={(e) =>{setFormData.gender(e.target.value)}}
    //                 />
    //                 <label htmlFor="Male">Male</label>
    //             </div>

    //             <div>
    //                 <input
    //                 type="radio"
    //                 id="Female"
    //                 name="gender"
    //                 value= "Female"
    //                 checked = { formData.gender === 'Female'}
    //                 onChange={(e) =>{setFormData.gender(e.target.value)}}
    //                 />
    //                 <label htmlFor="Female">Female</label>
    //             </div>

    //         </div>

    //         <button type="submit" >Submit</button>
    //     </form>
    //     {/* <button onClick={handleReturn}>Home</button> */}
    // </div>
  );
}
export default EmployeeEditForm;
