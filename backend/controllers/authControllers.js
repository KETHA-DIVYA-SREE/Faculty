const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
// const Parent = require("../models/parentModel");
// const Faculty = require("../models/facultyModel");
// const Admin = require("../models/adminsModel");

const authStudent = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (student && (await student.matchPassword(password))) {
        res.json({
            _id: student._id,
            fname: student.fname,
            lname: student.lname,
            email: student.email,
            class_id: student.class_id
        })
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

// const authParent = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const parent = await Parent.findOne({ email });
//     if (parent && (await parent.matchPassword(password))) {
//         res.json({
//             _id: parent._id,
//             fname: parent.fname,
//             lname: parent.lname,
//             email: parent.email,
//             class_id: parent.class_id
//         })
//     } else {
//         res.status(401);
//         throw new Error("Invalid Email or Password");
//     }
// });

// const authFaculty = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const faculty = await Faculty.findOne({ email });
//     if (faculty && (await faculty.matchPassword(password))) {
//         // res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
//         res.json({
//             _id: faculty._id,
//             fname: faculty.fname,
//             lname: faculty.lname,
//             email: faculty.email,
//             class_id: faculty.class_id
//         })
//     } else {
//         res.status(401);
//         throw new Error("Invalid Email or Password");
//     }
// });

// const authAdmin = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const admin = await Admin.findOne({ email });
//     if (admin && (await admin.matchPassword(password))) {
//         res.json({
//             _id: admin._id,
//             fname: admin.fname,
//             lname: admin.lname,
//             email: admin.email,
//             location_id: admin.class_id
//         })
//     } else {
//         res.status(401);
//         throw new Error("Invalid Email or Password");
//     }
// });

module.exports = { authStudent };
    // , authParent, authFaculty, authAdmin };