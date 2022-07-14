import express from "express";
const router = express.Router();
import { signin, signup } from '../controllers/user.js';

//user routes
router.post('/signin', signin);

router.post('/signup', signup);

export default router;