const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const User = require("../models/user"); // path to your Sequelize model

const router = express.Router();
// const JWT_SECRET = "14f9a7241cbfcca23626b6b0ecbca742"; // Use env var in production

//To add new user
router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//
// Login Route
// router.post("/login", async (req, res) => {
// try {
// const { email, password } = req.body;
//
// Find user
// const user = await User.findOne({ where: { email } });
// if (!user)
// return res.status(401).json({ message: "Invalid email or password" });
//
// Compare password
// const match = await bcrypt.compare(password, user.password);
// if (!match)
// return res.status(401).json({ message: "Invalid email or password" });
//
// Generate token
// const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
// expiresIn: "1h",
// });
//
// res.json({ message: "Login successful", token });
// } catch (err) {
// res.status(500).json({ message: "Something went wrong" });
// }
// });

// module.exports = router;

// Login Route
router.post("/login", async (req, res) => {
  try {
    const userData = req.body;
    // const { email, password } = req.body;
    const Email = userData.email;
    const Password = userData.password;
    console.log(`Email: ${Email}`);
    console.log(`Password: ${Password}`);

    // Find user
    const user = await User.findOne({
      where: {
        email: Email,
        password: Password,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare password
    // const match = await bcrypt.compare(password, user.password);
    // if (!match)
    //   return res.status(401).json({ message: "Invalid email or password" });

    // Generate token
    // const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    //   expiresIn: "1h",
    // });

    // res.json({ message: "Login successful", token });
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
