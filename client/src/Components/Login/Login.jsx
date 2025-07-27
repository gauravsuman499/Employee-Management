import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validatePassword from "../../Utility/utility";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
// import './Login.css'
// import e from "express";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState('');
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState([]);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (newEmail) => {
    // const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail) && newEmail !== "") {
      // setEmailError('Invalid email format');
      setError("Invalid email format");
    } else {
      // setEmailError('');
      setError("");
    }
  };

  const handlePasswordChange = (newPassword) => {
    // const newPassword = e.target.value ;
    setPassword(newPassword);
    const errorPassword = validatePassword(newPassword);
    // console.log(errorPassword);

    if (errorPassword.length > 0 && newPassword !== "") {
      // setPasswordError('Invalid password format');
      setError("Invalid password format");
      // setPasswordError(errorPassword);
    } else {
      // setPasswordError('');
      setError("");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const body = { email: email, password: password };

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        body
      );
      if (res.status === 200) {
        navigate("/dashboard");
      }
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <Box sx={{ backgroundColor: "lightgray" }}>
      <Container maxWidth={"xs"}>
        {/* // <div style={{backgroundColor:"blueviolet" }}> */}
        <Paper elevation={4} sx={{ p: 4, mt: 20, borderRadius: 4 }}>
          {/* <div style={{ height:"50pc", alignContent:"center"}}> */}

          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" align="center" gutterBottom>
              Sign In
            </Typography>
          </Box>
          <Box
            component={"form"}
            onSubmit={handleLogin}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            <TextField
              margin="normal"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                handleEmailChange(e.target.value);
              }}
              autoFocus
              fullWidth
              required
            ></TextField>

            <TextField
              margin="normal"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                handlePasswordChange(e.target.value);
              }}
              required
              fullWidth
            ></TextField>
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}

            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>

            {/* <h2 className="login-head"> Welcome back! </h2> */}
            {/* <form className="login-container" onSubmit={handleLogin}> */}
            {/* <div className="Email"> */}
            {/* <label style={{margin:"5px", }}> Email: </label> */}
            {/* <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    /> */}
            {/* {emailError && <p style={{color:'red'}} >{emailError}</p>} */}
            {/* {error && <p style={{color:'red'}} >{error}</p>} */}
            {/* </div> */}

            {/* <div className="Password"> */}
            {/* <label style={{margin:"5px", }}> Password: </label> */}
            {/* <input
                      type="password"
                      id="password"
                      value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      onChange={handlePasswordChange}
                      required
                    /> */}
            {/* {passwordError && <p style={{color:'red'}} > {passwordError}</p>} */}
            {/* {error && <p style={{color:'red'}} > {setError}</p>} */}
            {/* </div> */}
            {/* <button style={{backgroundColor: "darkorange", width:"100px"}} type="submit">Log In</button> */}
            {/* </form> */}
            {/* </div> */}
            {/* </div> */}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
