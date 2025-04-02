const sequelize = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");
const Company = require("../models/company.model");
const Passport_data = require("../models/passport.model");
const User_documents = require("../models/userdoc.model");
const Users = require("../models/users.model");
const User_skills = require("../models/userskil.model");
const jwtService = require("../service/jwt.service");

const addUser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      role,
      refresh_token,
      created_at,
    } = req.body;

    const newUser = await Users.create({
      first_name,
      last_name,
      phone_number,
      role,
      refresh_token,
      created_at,
    });

    res.status(201).send({ message: "tug'ildi", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await Users.findAll({
      include: [User_documents, Passport_data, User_skills, Company],
    });

    res.status(200).send({ users });
  } catch (error) {
    errorHandler(error, res);
  }
};
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);

    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.destroy({ where: { id } });

    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const loginUser = async (req, res) => {
  try {
    const { phone_number, password } = req.body;

    const user = await Users.findOne({ phone_number });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const payload = {
      id: user._id,
      phone_number: user.phone_number,
      role: user.role,
    };

    const tokens = jwtService.generateTokens(payload);
    user.refresh_token = tokens.refreshToken;
    await user.save();
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      maxAge: config.get("refresh_cookie_time"),
    });
    console.log(req.cookies);

    res
      .status(200)
      .send({ message: "Login successful", accessToken: tokens.accessToken });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addUser,
  getAllUser,
  getById,
  deleteUser,
  loginUser
};
