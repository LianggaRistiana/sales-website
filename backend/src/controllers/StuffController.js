import { Op } from "sequelize";
import Stuff from "../models/Stuff.js";

// Getting all stuff
export const getStuff = async (req, res) => {
  try {
    const stuffs = await Stuff.findAll();
    return res.status(200).json({
      succses: true,
      message: "Succes to Fetch all stuff data",
      data: stuffs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};

// Getting stuff spesific by id
export const getStuffById = async (req, res) => {
    try {
      const stuffs = await Stuff.findByPk(req.params.id);
      return res.status(200).json({
        succses: true,
        message: "Succes to Fetch all stuff data",
        data: stuffs,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: `${error}` });
    }
  };
