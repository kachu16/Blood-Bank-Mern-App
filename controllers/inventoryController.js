import mongoose from "mongoose";
import inventoryModel from "../models/inventoryModel.js";
import userModel from "../models/userModel.js";

export const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    // validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    // if (inventoryType === 'In' && user.role !== 'Donar') {
    //     throw new Error('Only Donar can add blood');
    // }
    // if (inventoryType === 'Out' && user.role !== 'Hospital') {
    //     throw new Error('Only Hospital can send blood');
    // }

    if (req.body.inventoryType == "Out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      
      const organization = new mongoose.Types.ObjectId(req.body.userId);
      // console.log(organization);
      //calculate Blood Quanitity
      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organization,
            inventoryType: "In",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalIn = totalInOfRequestedBlood[0]?.total || 0;
      console.log("Total In", totalIn);
      //calculate OUT Blood Quanitity
      debugger;
      const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organization,
            inventoryType: "Out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

      //in & Out Calc
      const availableQuanityOfBloodGroup = totalIn - totalOut;
      //quantity validation
      if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuanityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`,
        });
      }
      req.body.hospital = user?._id;
    } else {
      req.body.donar = user?._id;
    }
  

    // save the inventory data
    const inventory = new inventoryModel(req.body);
    await inventory.save();

    return res.status(200).send({
      success: true,
      message: "New Blood Record Added",
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
    //after login as organization : only organization can get all inventory
    const inventory = await inventoryModel
      .find({ organization: req.body.decodeID })
      .populate("donar")
      .populate("hospital")
      .populate("organization")
      .sort({ createdAt: -1 });
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

// to get all the donars

export const getDonarsController = async (req,res) => {
    try {
        const organization = req.body.userId;
        // find donars
        const donarId = await inventoryModel.distinct("donar", { organization });

        const donars = await userModel.find({ _id: { $in: donarId } });
        return res.status(200).send({
            success: true,
            message : "Donars fetched successfully",
            donars,
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in get donars API",
            error,
          });
    }
};


// to get all the hospitals

export const getHospitalsController = async (req,res) => {
    try {
        const organization = req.body.userId;
        // find donars
        const hospitalId = await inventoryModel.distinct("hospital", { organization });

        const hospitals = await userModel.find({ _id: { $in: hospitalId } });
        return res.status(200).send({
            success: true,
            message : "Hospitals fetched successfully",
            hospitals,
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in get Hospital API",
            error,
          });
    }
};

