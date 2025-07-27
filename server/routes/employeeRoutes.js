const express = require("express");
const Employee = require("../models/employee");
const router = express.Router();

//Get all employees data
router.get("/", async (req, res) => {
  try {
    const data = await Employee.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Count total employees
router.get("/totalcount", async (req, res) => {
  try {
    const totalEmployeesCnt = await Employee.count();
    res.status(200).send(totalEmployeesCnt);
    console.log(`totalcnt: ${totalEmployeesCnt}`);
  } catch (error) {
    res.status(500).json(`Eror: ${error}`);
  }
});

//Get employee data by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const employeeData = await Employee.findByPk(id);
    res.status(200).json(employeeData);
  } catch (error) {
    res.status(500).json(`Eror: ${error}`);
  }
});

//Add new Employee
router.post("/", async (req, res) => {
  try {
    const employeeData = req.body;
    const data = await Employee.create(employeeData);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`Error: ${error}`);
  }
});

//update Employee Data
router.put("/:id", async (req, res) => {
  const Id = req.params.id;
  // const employee = await employeeModel.findByPk(Id);
  const employee = req.body;
  // console.log(employee);

  // if(employee){
  const affectedRow = await Employee.update(employee, {
    where: {
      Id: Id,
    },
  });
  res.status(200).json({ updated: affectedRow });
  // }

  // res.status(404).send('Employee Not Found');
});

//Delete Employee by Id
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const affectedRow = await Employee.destroy({
    where: {
      Id: id,
    },
  });

  res.status(200).json({ deleted: affectedRow });
});

module.exports = router;
