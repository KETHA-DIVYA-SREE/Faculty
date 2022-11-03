const mongoose = require(`mongoose`);
const bcrypt = require( `bcryptjs` );

// name, classInfo, email, phoneNumber, semester
const studentModel = mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        classInfo: { type: String, required: true },
        email: { type: String, trim: true, required: true, unique: true },
        phoneNumber: { type: String, trim: true, required: true },
        semester: { type: Number, required: true },
        // status: {type:Boolean, require: true}
    },
    {
        timestamps: true
    }
);

// studentModel.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// }

// studentModel.pre('save', async function (next) {
//     if (!this.isModified) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

const Student = mongoose.model("Student", studentModel);
module.exports = Student;