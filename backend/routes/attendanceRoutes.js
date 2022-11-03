const express = require(`express`);
const { saveAttendance, fetchAttendance } = require(`../controllers/AttendanceControllers`);

const router = express.Router();

router.route("/").post(saveAttendance);
router.route('/fetch').get(fetchAttendance);

module.exports = router;