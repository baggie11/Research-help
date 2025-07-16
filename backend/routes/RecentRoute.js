import { getPapers } from "../controllers/RecentController.js";
import {Router} from 'express';

const router = Router();

router.get("/getPapers",getPapers);

export default router;
