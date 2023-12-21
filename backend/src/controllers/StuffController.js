import { Op } from "sequelize";
import Stuff from "../models/Stuff.js";

// Getting all stuff
export const getStuff = async (req, res) => {
  try {
    const stuffs = await Stuff.findAll();
    return res.status(200).json({
      success: true,
      message: "Success to Fetch all stuff data",
      data: stuffs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};

export const getMenStuff = async (req,res) => {
  try {
    const stuffs = await Stuff.findAll({
      where:{
        category:"Men"
      }
    });
    return res.status(200).json({
      success: true,
      message: "Success to Fetch all stuff data",
      data: stuffs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};
export const getWomenStuff = async (req,res) => {
  try {
    const stuffs = await Stuff.findAll({
      where:{
        category:"Women"
      }
    });
    return res.status(200).json({
      success: true,
      message: "Success to Fetch all stuff data",
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
      success: true,
      message: `Success to Fetch stuff data id = ${req.params.id}`,
      data: stuffs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};

// add stuff
export const addStuff = async (req, res) => {
  try {
    const { name, category, stock, price, desc,collectionCollectionID } = req.body;
    if (stock < 0) {
      return res.status(200).json({
        success: false,
        message: `Stock is an positif number`,
      });
    }
    if (price < 0) {
      return res.status(200).json({
        success: false,
        message: `Price is an positif number`,
      });
    }

    await Stuff.create({
      name,
      category,
      stock,
      price,
      desc,
      collectionCollectionID,
    });
    return res.status(200).json({
      success: true,
      message: `A new stuff successfully added`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};

// edit data stuff
export const setStuff = async (req, res) => {
  try {
    const stuffID = req.params.id;
    const { name, category, stock, price, desc,collectionCollectionID } = req.body;
    if (stock < 0) {
      return res.status(200).json({
        success: false,
        message: `Stock is an positif number`,
      });
    }
    if (price < 0) {
      return res.status(200).json({
        success: false,
        message: `Price is an positif number`,
      });
    }
    await Stuff.update(
      {
        name,
        category,
        stock,
        price,
        desc,
        collectionCollectionID,
      },
      {
        where: {
          stuffID: stuffID,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: `A new stuff with id = ${stuffID} successfully updated`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};

// delete
export const removeStuff = async (req, res) => {
  try {
    const stuffID = req.params.id;
    await Stuff.destroy({
      where: {
        stuffID: stuffID,
      },
    });
    return res.status(200).json({
      success: true,
      message: `Stuff with id = ${stuffID} successfully removed`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
