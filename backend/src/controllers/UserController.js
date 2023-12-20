import { Op } from "sequelize";
import User from "../models/User.js";
import bcrypt from "bcrypt";

// Getting all data
export const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({
      success: true,
      message: "Success to fetch all data",
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};

// Getting user spesific by id
export const getUserById = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.id);
    return res.status(200).json({
      success: true,
      message: `Success to Fetch stuff data id = ${req.params.id}`,
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};

// addData
export const addUser = async (req, res) => {
  try {
    const { name, email, address, password, role } = req.body;
    const checkEmail = await User.findOne({ where: { email: email } });

    if (checkEmail) {
      return res.status(200).json({
        success: false,
        message: "Email already used",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      address,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "a new user successfully added",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};

// edit data
export const setUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const { name, email, address, password, role } = req.body;

    const oldUser = await User.findOne({
      where: {
        userID: userID,
      },
    });

    const checkEmail = await User.findOne({ where: { email: email } });

    if (checkEmail && oldUser.email != email) {
      return res.status(200).json({
        success: false,
        message: "Email is already used",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.update(
      {
        name,
        email,
        address,
        password: hashedPassword,
        role,
      },
      {
        where: {
          userID: userID,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: `User with id = ${userID} successfully updated`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};

//delete user

export const removeUser = async (req, res) => {
  try {
    const userID = req.params.id;
    await User.destroy({
      where: {
        userID: userID,
      },
    });
    return res.status(200).json({
      success: true,
      message: `User with id = ${userID} successfully removed`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
