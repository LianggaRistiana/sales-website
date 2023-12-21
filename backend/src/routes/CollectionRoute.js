import express from 'express';
import { getCollection,getCollectionById, getCollectionGroup } from '../controllers/CollectionController.js';

const router = express.Router();

router.get("/",getCollection);
router.get("/:id",getCollectionGroup);

export default router;