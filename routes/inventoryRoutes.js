import { Router } from "express";
import { createInventoryController, getDonarsController, getHospitalsController, getInventoryController } from "../controllers/inventoryController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = Router();

// create inventory route
router.post('/create-inventory', authMiddleware, createInventoryController);

// get all blood records
router.get('/get-inventory', authMiddleware, getInventoryController);

// get all Donar records
router.get('/get-donars', authMiddleware, getDonarsController);

// get all Hospitals records
router.get('/get-hospitals', authMiddleware, getHospitalsController);

export default router;