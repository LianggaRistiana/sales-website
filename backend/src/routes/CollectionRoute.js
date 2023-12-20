import express from 'express';
import { getCollection,getCollectionById } from '../controllers/CollectionController.js';

const router = express.Router();

router.get("/",getCollection);
router.get("/:id",getCollectionById);

export default router;