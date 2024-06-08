import { Router } from "express";
import { createInventoryController, getInventoryController } from "../controllers/inventoryController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = Router();

// create inventory route
router.post('/create-inventory', authMiddleware, createInventoryController);

// get all blood records
router.get('/get-inventory', authMiddleware, getInventoryController);

export default router;