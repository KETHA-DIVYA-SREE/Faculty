const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminsModel");
const generateToken = require("../config/generateToken");

const registerAdmin = asyncHandler(async (req, res) => {
    const { fname, lname, email, password, location_id } = req.body;
    if (!fname || !lname || !email || !password || !location_id) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
        res.status(400);
        throw new Error("Admin already exists");
    }
    const admin = await Admin.create({ fname, lname, cnic, email, password, location_id, class_id });
    if (admin) {
        res.status(201).json({
            _id: admin._id,
            fname: admin.fname,
            lname: admin.lname,
            password: admin.password,
            token: generateToken(admin._id)
        });
    } else {
        res.status(400);
        throw new Error("Failed to create admin");
    }
});

const fetchAdmin = asyncHandler(async (req, res) => {
    try {
        const admin = await Admin.find().populate("fname").populate("lname").populate("email").populate("password").populate("location_id");
        res.send(admin);
    } catch (error) {
        res.status(400);
        throw new Error("something is wrong");
    }
})

const editAdmin = asyncHandler(async (req, res) => {
    const { adminId, fname, lname, email, password, location_id } = req.body;
    const updateAdmin = await Admin.findByIdAndUpdate(
        adminId,
        {
            fname, lname, email, password, location_id
        },
        { new: true }
    ).populate("fname").populate("lname").populate("email").populate("password").populate("location_id");
    if (!updateAdmin) {
        res.status(404);
        throw new Error("Admin list not updated");
    } else {
        res.send(updateAdmin);
    }
});

const deleteAdmin = asyncHandler(async (req, res) => {
    const { adminId } = req.body;
    const remove = await Admin.findByIdAndDelete(adminId,{new:true}).populate("fname").populate("lname").populate("email").populate("password").populate("location_id");
    if (!remove) {
        res.status(404);
        throw new Error("Admin List Not Found");
    } else {
        res.json(remove);
    }
})


module.exports = {registerAdmin, fetchAdmin, editAdmin, deleteAdmin };