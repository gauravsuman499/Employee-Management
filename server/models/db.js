const {Sequelize}  = require('sequelize');
const Employee = require('./employee');
const User = require('./user');



const sequelize = new Sequelize('employee_db', 'root', 'Gaurav###@123', {
    host: 'localhost', 
    dialect: 'mysql',
});


sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Connection error:', err));



Employee.initModel(sequelize);
User.initModel(sequelize);



module.exports = { 
    sequelize,
    User,
    Employee,
};
