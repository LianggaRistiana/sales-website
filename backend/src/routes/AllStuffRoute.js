import express from 'express';
import { getStuff, getStuffById } from '../controllers/StuffController.js';

const router = express.Router();

router.get("/",getStuff);
router.get("/:id",getStuffById);



export default router;