import express from 'express';
import { createConcer } from "../controllers/contactController.js";
import { createQuery } from '../controllers/queryController.js';

const router = express.Router();

router.route('/contact').post(createConcer);
router.route('/query').post(createQuery);

export default router;