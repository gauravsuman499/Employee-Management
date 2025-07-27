// const { DataTypes, Model } = require("sequelize");
//
// Define User model using class + init
// class User extends Model {
// static initModel(sequelize) {
// User.init(
// {
// id: {
// type: DataTypes.INTEGER,
// autoIncrement: true,
// primaryKey: true,
// },
//
// email: {
// type: DataTypes.STRING,
// allowNull: false,
// unique: {
// msg: "Email already exists",
// },
// validate: {
// notEmpty: {
// msg: "Email is required",
// },
// isEmail: {
// msg: "Must be a valid email address",
// },
// isValidFormat(value) {
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// if (!emailRegex.test(value)) {
// throw new Error("Invalid email format");
// }
// },
// },
// set(value) {
// this.setDataValue("email", value.toLowerCase());
// },
// },
//
// password: {
// type: DataTypes.STRING,
// allowNull: false,
// validate: {
// notEmpty: {
// msg: "Password is required",
// },
// len: {
// args: [8, 100],
// msg: "Password must be at least 8 characters long",
// },
// isStrong(value) {
// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
// if (!regex.test(value)) {
// throw new Error(
// "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
// );
// }
// },
// },
// },
// },
// {
// sequelize,
// timestamps: false,
// createdAt: false,
// updatedAt: false,
// },
// {
// sequelize, // Pass the Sequelize instance
// modelName: "User", // Model name
// }
// );
// }
// }
// module.exports = User;

const { DataTypes, Model } = require("sequelize");

// Define User model using class + init
class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },

        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            msg: "Email already exists",
          },
          validate: {
            notEmpty: {
              msg: "Email is required",
            },
            isEmail: {
              msg: "Must be a valid email address",
            },
            isValidFormat(value) {
              const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              if (!emailRegex.test(value)) {
                throw new Error("Invalid email format");
              }
            },
          },
          set(value) {
            this.setDataValue("email", value.toLowerCase());
          },
        },

        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Password is required",
            },
            len: {
              args: [8, 100],
              msg: "Password must be at least 8 characters long",
            },
            isStrong(value) {
              const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
              if (!regex.test(value)) {
                throw new Error(
                  "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
                );
              }
            },
          },
        },
      },
      {
        sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      },
      {
        sequelize, // Pass the Sequelize instance
        modelName: "User", // Model name
      }
    );
  }
}
module.exports = User;
