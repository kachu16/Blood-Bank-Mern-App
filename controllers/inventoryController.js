import inventoryModel from "../models/inventoryModel.js";
import userModel from "../models/userModel.js";

export const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    // validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error(
        "User not found! Enter a valid Email Address from which you registered"
      );
    }
    // if (inventoryType === "In" && user.role !== "Donor") {
    //   throw new Error("Only Donor can add blood");
    // }
    if (inventoryType === "Out" && user.role !== "Hospital") {
      throw new Error("Only Hospital can send blood");
    }

    // save the inventory data
    const inventory = new inventoryModel(req.body);
    await inventory.save();

    return res.status(200).send({
      success: true,
      message: `New Blood Record Added by ${user.role}`,
      inventory,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in create inventory API",
      err,
    });
  }
};

export const getInventoryController = async (req, res) => {
  try {
    console.log(req.body.decodeID);
    const inventory = await inventoryModel
      .find({ organization: req.body.organization })
      .populate("donor")
      .populate("hospital")
      .populate("organization")
      .sort({ createdAt: -1 });

    console.log(inventory);
    return res.status(200).send({
      success: true,
      message: "Successfully get all inventories",
      inventory,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in get inventory API",
      err,
    });
  }
};
