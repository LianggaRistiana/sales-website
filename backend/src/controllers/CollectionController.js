import { Op } from "sequelize";
import Collection from "../models/Collection.js";

// Getting all collection
export const getCollection = async (req,res) => {
    try {
        const collections = await Collection.findAll();
        return res.status(200).json({
          succses: true,
          message: "Succes to Fetch all stuff data",
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
          succses: true,
          message: "Succes to Fetch all stuff data",
          data: collections,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: `${error}` });
      }
}