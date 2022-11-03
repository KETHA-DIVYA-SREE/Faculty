const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
// const generateToken = require("../config/generateToken");

const registerStudent = asyncHandler(async (req, res) => {
    const { name, classInfo, email, phoneNumber, semester } = req.body;
    if (!name || !classInfo || !email || !phoneNumber || !semester) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    const studentExists = await Student.findOne({ email });
    if (studentExists) {
        res.status(400);
        throw new Error("Student already exists");
    }
    const student = await Student.create({ name, classInfo, email, phoneNumber, semester });
    if (student) {
        res.status(201).json({
            _id: student._id,
            name: student.name,
            classInfo: student.classInfo,
            email: student.email,
            phoneNumber: student.phoneNumber,
            semester: student.phoneNumber
            // password: student.password,
            // token: generateToken(student._id)
        });
    } else {
        res.status(400);
        throw new Error("Failed to create student");
    }
});

const fetchStudent = asyncHandler(async (req, res) => {
    try {
        const student = await Student.find().populate("name").populate("classInfo").populate("email").populate("phoneNumber").populate("semester");
        res.send(student);
    } catch (error) {
        res.status(400);
        throw new Error("something is wrong");
    }
} )

const fetchStudentById = asyncHandler( async ( req, res ) => {
    const { studentId } = req.query;
    // res.send( studentId );
    try {
        const student = await Student.findById(studentId).populate("name").populate("classInfo").populate("email").populate("phoneNumber").populate("semester");
        res.send(student);
    } catch (error) {
        res.status(400);
        throw new Error("something is wrong");
    }
})

const editStudent = asyncHandler( async ( req, res ) => {
    const { studentId } = req.query;
    console.log( studentId );
    const { name, classInfo, email, phoneNumber, semester } = req.body;
    const updateStudent = await Student.findByIdAndUpdate(
        studentId,
        {
            name, classInfo, email, phoneNumber, semester,
        },
        { new: true }
    ).populate("name").populate("classInfo").populate("email").populate("phoneNumber").populate("semester");
    if (!updateStudent) {
        res.status(404);
        throw new Error("Student list not updated");
    } else {
        res.send(updateStudent);
    }
});

const deleteStudent = asyncHandler(async (req, res) => {
    const { studentId } = req.query;
    const remove = await Student.findByIdAndDelete(studentId,{new:true}).populate("name").populate("classInfo").populate("email").populate("phoneNumber").populate("semester");
    if (!remove) {
        res.status(404);
        throw new Error("Student List Not Found");
    } else {
        res.json(remove);
    }
})


module.exports = { registerStudent, fetchStudent, fetchStudentById, editStudent, deleteStudent };