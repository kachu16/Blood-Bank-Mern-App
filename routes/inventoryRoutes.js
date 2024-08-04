import { Router } from "express";
import {
  createInventoryController,
  getDonarsController,
  getHospitalController,
  getInventoryController,
  getOrganizationController,
} from "../controllers/inventoryController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = Router();

// create inventory route
router.post("/create-inventory", authMiddleware, createInventoryController);

// get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

// get all donor records
router.get("/donor-records", authMiddleware, getDonarsController);

// get all hospital records
router.get("/hospital-records", authMiddleware, getHospitalController);

// get all organization records
router.get("/organization-records", authMiddleware, getOrganizationController);

export default router;
