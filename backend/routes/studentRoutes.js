const express = require(`express`);
const { registerStudent, fetchStudent, fetchStudentById, editStudent, deleteStudent } = require(`../controllers/studentControllers`);
const { authStudent } = require(`../controllers/authControllers`);
// const { protect } = require(`../middleware/authMiddleware`);

const router = express.Router();

router.route("/").post(registerStudent);
router.post("/StudentLogin", authStudent);
    // .get(searchAllTemplates);
// router.route('/fetch').get(protect, fetchStudent);
// router.route('/edit').put(protect, editStudent);
// router.route('/delete').put(protect, deleteStudent);
router.route( '/fetch' ).get( fetchStudent );
router.route( '/fetchById' ).get( fetchStudentById );
router.route('/edit').put(editStudent);
router.route('/delete').delete(deleteStudent);

module.exports = router;