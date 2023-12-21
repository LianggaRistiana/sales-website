import express from 'express';
import { getWomenStuff } from '../controllers/StuffController.js';
import { getWomenCollection } from '../controllers/CollectionController.js';

const router = express.Router();
router.get("/stuff",getWomenStuff);
router.get("/collection",getWomenCollection);

export default router;