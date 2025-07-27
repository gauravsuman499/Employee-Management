// const { DataTypes, Model } = require("sequelize");

// // Define Employee model
// class Employee extends Model {
//   static initModel(sequelize) {
//     Employee.init(
//       {
//         id: {
//           type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true,
//         },

//         name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notEmpty: { msg: "Name is required" },
//             len: {
//               args: [3, 100],
//               msg: "Name must be at least 3 characters long",
//             },
//           },
//         },

//         email: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           unique: {
//             msg: "Email already exists",
//           },
//           validate: {
//             notEmpty: { msg: "Email is required" },
//             isEmail: { msg: "Must be a valid email address" },
//           },
//           set(value) {
//             this.setDataValue("email", value.toLowerCase());
//           },
//         },

//         phoneNo: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notEmpty: { msg: "Phone number is required" },
//             is: {
//               args: /^[0-9]{10,15}$/,
//               msg: "Phone number must be between 10 to 15 digits",
//             },
//           },
//         },

//         department: {
//           type: DataTypes.ENUM("research", "development"),
//           allowNull: false,
//           validate: {
//             isIn: {
//               args: [["research", "development"]],
//               msg: "Department must be either research or development",
//             },
//           },
//         },

//         salary: {
//           type: DataTypes.DECIMAL(10, 2),
//           allowNull: false,
//           validate: {
//             isDecimal: { msg: "Salary must be a valid number" },
//             min: {
//               args: [0],
//               msg: "Salary must be greater than or equal to 0",
//             },
//           },
//         },

//         status: {
//           type: DataTypes.ENUM("active", "inactive"),
//           allowNull: false,
//           validate: {
//             isIn: {
//               args: [["active", "inactive"]],
//               msg: "Status must be either active or inactive",
//             },
//           },
//         },

//         dob: {
//           type: DataTypes.DATEONLY,
//           allowNull: false,
//           validate: {
//             notEmpty: { msg: "Date of birth is required" },
//             isDate: { msg: "Date of birth must be a valid date" },
//           },
//         },

//         gender: {
//           type: DataTypes.ENUM("male", "female"),
//           allowNull: false,
//           validate: {
//             isIn: {
//               args: [["male", "female"]],
//               msg: "Gender must be either male or female",
//             },
//           },
//         },
//       },
//       {
//         sequelize,
//         timestamps: true,
//       },
//       {
//         sequelize,
//         modelName: "Employee",
//       }
//     );
//   }
// }
// module.exports = Employee;

const { DataTypes, Model } = require("sequelize");

// Define Employee model
class Employee extends Model {
  static initModel(sequelize) {
    Employee.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },

        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: "Name is required" },
            len: {
              args: [3, 100],
              msg: "Name must be at least 3 characters long",
            },
          },
        },

        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            msg: "Email already exists",
          },
          validate: {
            notEmpty: { msg: "Email is required" },
            isEmail: { msg: "Must be a valid email address" },
          },
          set(value) {
            this.setDataValue("email", value.toLowerCase());
          },
        },

        phoneNo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: "Phone number is required" },
            is: {
              args: /^[0-9]{10,15}$/,
              msg: "Phone number must be between 10 to 15 digits",
            },
          },
        },

        department: {
          type: DataTypes.ENUM("Research", "Development"),
          allowNull: false,
          validate: {
            isIn: {
              args: [["Research", "Development"]],
              msg: "Department must be either Research or Development",
            },
          },
        },

        salary: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            isDecimal: { msg: "Salary must be a valid number" },
            min: {
              args: [0],
              msg: "Salary must be greater than or equal to 0",
            },
          },
        },

        status: {
          type: DataTypes.ENUM("Active", "Inactive"),
          defaultValue: "Active",
          allowNull: false,
          validate: {
            isIn: {
              args: [["Active", "Inactive"]],
              msg: "Status must be either Active or Inactive",
            },
          },
        },

        dob: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          validate: {
            notEmpty: { msg: "Date of birth is required" },
            isDate: { msg: "Date of birth must be a valid date" },
          },
        },

        gender: {
          type: DataTypes.ENUM("Male", "Female"),
          allowNull: false,
          validate: {
            isIn: {
              args: [["Male", "Female"]],
              msg: "Gender must be either Male or Female",
            },
          },
        },
      },
      {
        sequelize,
        timestamps: true,
      },
      {
        sequelize,
        modelName: "Employee",
      }
    );
  }
}
module.exports = Employee;
