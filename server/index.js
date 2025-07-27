const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models/db");
const User = require("./models/user");
const Employee = require("./models/employee");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Server is listening on port 4000");
  });
});
