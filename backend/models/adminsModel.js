const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`);

// fname, lname, email, password, location_id
const adminsModel = mongoose.Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        location_id: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

adminsModel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

adminsModel.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Admins = mongoose.model("Admins", adminsModel);
module.exports = Admins;