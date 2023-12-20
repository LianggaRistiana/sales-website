import { Op } from "sequelize";
import Collection from "../models/Collection.js";

// Getting all collection
export const getCollection = async (req,res) => {
    try {
        const collections = await Collection.findAll();
        return res.status(200).json({
          success: true,
          message: "Success to Fetch all collection data",
          data: collections,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: `${error}` });
      }
}
// Getting collection spesific by id
export const getCollectionById = async (req,res) => {
    try {
        const collections = await Collection.findByPk(req.params.id);
        return res.status(200).json({
          success: true,
          message: `Success to Fetch collection data id = ${req.params.id}`,
          data: collections,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: `${error}` });
      }
}

// add collection
export const addCollection = async (req, res) => {
  try {
    const { name, category } = req.body;
   
    await Collection.create({
      name,
      category
    });
    return res.status(200).json({
      success: true,
      message: `A new collection successfully added`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};



// edit data collection
export const setCollection = async (req, res) => {
  try {
    const collectionID = req.params.id;
    const { name, category } = req.body;
    
    await Collection.update(
      {
        name,
        category,
      },
      {
        where: {
          collectionID: collectionID,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: `A new collection with id = ${collectionID} successfully updated`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};

// delete collection
export const removeCollection = async (req, res) => {
  try {
    const collectionID = req.params.id;
    await Collection.destroy({
      where: {
        collectionID: collectionID,
      },
    });
    return res.status(200).json({
      success: true,
      message: `Collection with id = ${collectionID} successfully removed`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};