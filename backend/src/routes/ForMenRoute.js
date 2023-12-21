import express from 'express';
import { getMenStuff } from '../controllers/StuffController.js';
import { getMenCollection } from '../controllers/CollectionController.js';

const router = express.Router();
router.get("/stuff",getMenStuff);
router.get("/collection",getMenCollection)

export default router;