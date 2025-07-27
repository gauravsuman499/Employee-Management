import React, { useState } from "react";
import API from "../../services/api";
// import './AddNewEmployee.css';
import { useNavigate } from "react-router-dom";
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

// import dayjs from 'dayjs';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function EmployeeForm(event) {
  const navigate = useNavigate();

  // const [form, setForm] = useState({Name: '', email: '', phoneNo:'',  department:'', salary:'', status: 'active', dob:'', gender:''});

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
  const [errors, setErrors] = useState("");

  // const [selectedOption, setSelectedOption] = useState('');

  // const handleChange = e => setForm({ [e.target.name] : e.target.value});

  //  let handleChange = e => setName({ [e.target.name] : e.target.value});
  //  handleChange = e => setEmail({ [e.target.name] : e.target.value});
  //  handleChange = e => setPhoneNo({ [e.target.name] : e.target.value});
  //  handleChange = e => setDepartment({ [e.target.name] : e.target.value});
  //  handleChange = e => setSalary({ [e.target.name] : e.target.value});
  //  handleChange = e => setStatus({[e.target.name] : e.target.value});
  //  handleChange = e => setDob({[e.target.name] : e.target.value});
  //  handleChange = e => setGender({[e.target.name] : e.target.value});

  // const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value);
  // };
  const handleToggle = (value) => {
    // console.log(value, 'value123')
    setIsToggled(value);

    if (!value) {
      setStatus("Inactive");
    } else {
      setStatus("Active");
    }
    // console.log(status);
  };

  // const handleReturn =  (event) =>{
  //     event.preventDefault();
  //     navigate('/employees');
  // }

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
    console.log("Employee data:", data);

    // console.log(`Data is: ${data.department}`);
    // console.log(`Data is: ${data.status}`);
    try {
      const response = await API.post(`/`, data);
      window.alert(`Successfully added new employee`);
      console.log(`Successfully added new employee: ${response}`);
      navigate("/employees");
    } catch (error) {
      window.alert(`Error occurred while adding new employee!`);
      console.log(`Error occurred while adding new employee: ${error}`);
    }
  };

  //to render on UI
  return (
    <Container maxWidth={"sm"} sx={{ backgroundColor: "lightgrey" }}>
      <Typography variant="h4" align="center" gutterBottom fontSize={"md"}>
        New Employee
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
            required
          />

          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            required
          />

          <TextField
            label="Phone No"
            type="phoneNo"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            fullWidth
            required
          />

          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Department</InputLabel> */}
            <InputLabel id="demo-simple-select-label">Department *</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={department}
              label="Department"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
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
            onChange={(e) => {
              setSalary(e.target.value);
            }}
            fullWidth
            required
          />

          {/* {/* Actual status management code */}
          <TextField
            label="Status"
            type="status"
            value={status}
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
                    label="Change Status"
                  />
                </InputAdornment>
              ),
            }}
            // onChange={(e) => {setIsToggled(e.target.value)}}
            fullWidth
            required
          />
          {/* //Actual status management code*/}

          {/* <TextField
    id="standard-name"
    label="Name"
    value="hello"
    InputProps={{endAdornment: <YOUR_COPY_ICON_BUTTON />}} */}
          {/* /> */}
          {/* <Switch
                checked
                onChange={setIsToggled}
                
            ></Switch> */}
          {/* <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            /> */}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Date Of Birth"
                value={dob}
                onChange={(selectedDate) => {
                  setDob(selectedDate);
                }}
                fullWidth
                // renderInput={(params) => <TextField {...params} fullWidth />}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "100%" }} />
                )}
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

          {/* <div> */}
          {/* <h2>
                Add New Employee
            </h2> */}
          {/* <form onSubmit={handleSubmit} > */}

          {/* <div>
                    <input name="name" placeholder="Name" value={name} onChange={(e) =>{setName(e.target.value)}} /><br/>
                </div> */}
          {/* <div>
                    <input name="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} /><br/>
                </div> */}
          {/* <div>
                    <input name="phoneNo" placeholder="PhoneNo" value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}}  /><br/>
                </div> */}

          {/* <div>
                    <select id="deptDropdown" placeholder="Department" value={department} onChange={(e) => {setDepartment(e.target.value)}}>
                        <option value={""}>Select a department</option>
                        <option value="Research">Research</option>
                        <option value="Development">Development</option>
                    </select>
                </div> */}

          {/* <input name="department" placeholder="Department" value={department} onChange={(e) => {setDepartment(e.target.value)}} /><br/> */}
          {/* <div>
                    <input name="salary" placeholder="Salary" value={salary} onChange={(e) =>{setSalary(e.target.value)}}  /><br/>
                </div> */}
          {/* <input name="status" placeholder="Current Status" value={status} onChange={(e) =>{setStatus(e.target.value)}}  /><br/> */}

          {/* <div>
                    <p>Current Status: {status}</p><br/>
                    <label className="switch">
                    <input type="checkbox" checked={isToggled} onChange={(e)=>{handleToggle(e.target.checked)}}/>
                        {/* {  !isToggled ? 'Inactive': 'Active'} */}
          {/* <span className="slider round"></span> */}
          {/* </label> */}

          {/* </div> */}

          {/* <input name="dob" placeholder="Date Of Birth" value={dob} onChange={(e) =>{setSalary(e.target.value)}}  /><br/> */}

          {/* <div>
                    <input name="dob"  placeholder="Date Of Birth"  type="date" id="date-input" value={dob} onChange={(e) =>{setDob(e.target.value)}}/>
                </div> */}
          {/* <div>
                    <p>Gender:</p>
                    <div>
                    {/* <input name="gender" placeholder="Gender" value={gender} onChange={(e) =>{setSalary(e.target.value)}}  /><br/> */}
          {/* <input
                        type="radio"
                        id="Male"
                        name="gender"
                        value="Male"
                        checked = { gender === 'Male'}                    
                        onChange={(e) =>{setGender(e.target.value)}}
                        />
                        <label htmlFor="Male">Male</label>
                    </div> */}

          {/* <div>
                        <input
                        type="radio"
                        id="Female"
                        name="gender"
                        value= "Female"
                        checked = { gender === 'Female'}                    
                        onChange={(e) =>{setGender(e.target.value)}}
                        />
                        <label htmlFor="Female">Female</label>
                    </div>  */}

          {/* </div> */}

          {/* <button type="submit" >Submit</button> */}
          {/* </form> */}
          {/* <button onClick={handleReturn}>Home</button> */}
          {/* </div> */}
        </Box>
      </Paper>
    </Container>
  );
}
export default EmployeeForm;
