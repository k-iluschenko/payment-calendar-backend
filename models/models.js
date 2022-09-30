const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Course = sequelize.define("course", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Lesson = sequelize.define("lesson", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.STRING },
  date: { type: DataTypes.STRING, allowNull: false },
});

const Status = sequelize.define("status", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.STRING, allowNull: false },
});

const Payment = sequelize.define("payment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.STRING, allowNull: false },
  sum: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Course);
Course.belongsTo(User);

Course.hasMany(Lesson);
Lesson.belongsTo(Course);

Lesson.hasMany(Status);
Status.belongsTo(Lesson);

Course.hasMany(Payment);
Payment.belongsTo(Course);

module.exports = {
  User,
  Course,
  Lesson,
  Status,
  Payment,
};
