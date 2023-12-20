import express from "express"
import { getUser,getUserById,addUser,setUser, removeUser } from "../controllers/UserController.js";
import { addStuff, getStuff,getStuffById, removeStuff, setStuff } from "../controllers/StuffController.js";
import { addCollection, getCollection, getCollectionById, removeCollection, setCollection } from "../controllers/CollectionController.js";


const router = express.Router();

// user route
router.get("/user",getUser);
router.get("/user/:id",getUserById);
router.put("/user/:id",setUser);
router.delete("/user/:id",removeUser);
router.post("/user",addUser);

// stuff
router.get("/stuff",getStuff);
router.get("/stuff/:id",getStuffById);
router.post("/stuff",addStuff);
router.put("/stuff/:id",setStuff);
router.delete("/stuff/:id",removeStuff);

// collection
router.get("/collection",getCollection);
router.get("/collection/:id",getCollectionById);
router.post("/collection",addCollection);
router.put("/collection/:id",setCollection);
router.delete("/collection/:id",removeCollection);

// router.get("/user",getUser);
// router.get("/user",getUser);

export default router;