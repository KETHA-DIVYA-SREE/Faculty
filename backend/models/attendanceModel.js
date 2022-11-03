const mongoose = require(`mongoose`);

const attendanceModel = mongoose.Schema(
    {
        date: { type: String },
        present: {type: Array}
    },
    {
        timestamps: true
    }
);

const Attendance = mongoose.model("Attendance", attendanceModel);
module.exports = Attendance;