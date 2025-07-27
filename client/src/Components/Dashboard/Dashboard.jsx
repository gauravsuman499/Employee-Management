// import React, { useState } from "react";
// // import "./Dashboard.css";

// import {
//   Box,
//   Card,
//   CardContent,
//   Link,
//   Stack,
//   Container,
//   Paper,
//   TextField,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
//   FormHelperText,
//   Typography,
//   Switch,
//   InputAdornment,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   FormLabel,
//   Button,
//   Grid,
// } from "@mui/material";

// import API from "../../services/api";
// import { useNavigate } from "react-router-dom";
// const Dashboard = () => {
//   const [totalEmployeesCount, setTotalEmployeesCount] = useState(0);
//   const navigate = useNavigate();

//   const handleTotalClick = (event) => {
//     event.preventDefault();
//     navigate("/employees");
//   };

//   const employeesCount = async () => {
//     const response = await API.get("/totalcount");
//     // totalEmployeesCount = response.data;
//     const totalCount = response.data;
//     setTotalEmployeesCount(totalCount);
//     // console.log(`TotalCount: ${totalCount}`);
//   };
//   employeesCount();

//   return (
//     <Box sx={{ p: 2, backgroundColor:"seagreen" }}>
//       <Stack padding={5} color={"whitesmoke"}>
//         <Typography
//           align="center"
//           variant="h4"
//           fontWeight={"bold"}
//           sx={{ display: "flex", alignSelf: "center" }}
//         >
//           DASHBOARD
//         </Typography>
//       </Stack>

//       <Grid container spacing={10}>
//         <Grid
//           item
//           xs={12}
//           sm={10}
//           md={4}
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems={"center"}
//           size={50}
//         >
//           <Card>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Employees in Research Department: 10
//               </Typography>
//               {/* <Typography variant="h4"> 10 </Typography> */}
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={10}
//           md={4}
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems={"center"}
//           size={100}
//         >
//           <Card>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Employees in Development Department: 10
//               </Typography>
//               {/* <Typography variant="h4"> 10 </Typography> */}
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={6}
//           md={4}
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems={"center"}
//           border={2}
//           size={100}
//         >
//           <Card
//             sx={{
//               tabSize: "20px",
//               cursor: "pointer",
//               "&:hover": {
//                 backgroundColor: "beige",
//               },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 <Link onClick={handleTotalClick}>
//                   Total Employees Count: {totalEmployeesCount}
//                 </Link>
//               </Typography>
//               {/* <Typography variant="h4">{totalEmployeesCount}</Typography> */}
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>

//     // <Container>
//     // {/* <div style={{ backgroundColor: "bisque" }}> */}
//     // {/* <h1 className="heading1">DASHBOARD</h1> */}
//     // {/* <Box sx={{ border: 5 }}> */}
//     // {/* <a className="emp-count" href="/employees"> */}
//     // {/* Total Employees Count: {totalEmployeesCount} */}
//     // {/* </a> */}
//     // {/* </Box> */}
//     // {/* <h1 className='emp-count' style={{}}>Total Employees Count: {totalEmployeesCount}</h1> */}
//     // {/* </div> */}
//     // {/* </Container> */}
//   );
// };

// export default Dashboard;

import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const Dashboard = () => {
  const [totalEmployeesCount, setTotalEmployeesCount] = useState(0);
  const navigate = useNavigate();

  const handleTotalClick = (event) => {
    event.preventDefault();
    navigate("/employees");
  };

  const fetchEmployeesCount = async () => {
    try {
      const response = await API.get("/totalcount");
      setTotalEmployeesCount(response.data);
    } catch (error) {
      console.error("Failed to fetch employee count", error);
    }
  };

  useEffect(() => {
    fetchEmployeesCount();
  }, []);

  const cardStyle = {
    minWidth: 275,
    p: 3,
    borderRadius: 3,
    boxShadow: 3,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: 6,
      backgroundColor: "rgba(255,255,255,0.95)",
    },
  };

  const iconStyle = {
    fontSize: 40,
    color: "seagreen",
    mb: 1,
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "linear-gradient(to right, #2c3e50, #4ca1af)",
      }}
    >
      <Stack alignItems="center" mb={5}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="whitesmoke"
          textAlign="center"
        >
          Employee Dashboard
        </Typography>
      </Stack>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardContent align="center">
              <WorkIcon sx={iconStyle} />
              <Typography variant="h6" gutterBottom>
                Research Department
              </Typography>
              <Typography variant="h4" color="primary">
                10
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardContent align="center">
              <AccountTreeIcon sx={iconStyle} />
              <Typography variant="h6" gutterBottom>
                Development Department
              </Typography>
              <Typography variant="h4" color="primary">
                10
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              ...cardStyle,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f9f9f9",
              },
            }}
            onClick={handleTotalClick}
          >
            <CardContent align="center">
              <GroupIcon sx={iconStyle} />
              <Typography variant="h6" gutterBottom>
                Total Employees
              </Typography>
              <Typography variant="h4" color="primary">
                {totalEmployeesCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
