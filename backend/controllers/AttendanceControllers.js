const asyncHandler = require("express-async-handler");
const Attendance = require("../models/attendanceModel");

const saveAttendance = asyncHandler(async (req, res) => {
    const { date, present } = req.body;
    if ( !date || !present ) {
        res.status(400);
        throw new Error("Please provide attendance details");
    }

    const attendance = await Attendance.create({ date, present });
    if (attendance) {
        res.status(201).json({
            _id: attendance._id,
            date: attendance.date,
            present: attendance.present
        });
    } else {
        res.status(400);
        throw new Error("Failed to provide attendance");
    }
});

const fetchAttendance = asyncHandler(async (req, res) => {
    try {
        const attendance = await Attendance.find().populate("date").populate("present");
        res.send(attendance);
    } catch (error) {
        res.status(400);
        throw new Error("something is wrong");
    }
} )

module.exports = { saveAttendance, fetchAttendance };