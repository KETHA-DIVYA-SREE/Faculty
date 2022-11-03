const express = require(`express`);
const { registerAdmin, fetchAdmin, editAdmin, deleteAdmin } = require(`../controllers/adminControllers`);
const { authAdmin } = require(`../controllers/authControllers`);
const { protect } = require(`../middleware/authMiddleware`);

const router = express.Router();

router.route("/").post(registerAdmin);
router.post("/AdminLogin", authAdmin);
router.route('/fetch').get(protect, fetchAdmin);
router.route('/edit').put(protect, editAdmin);
router.route('/delete').put(protect, deleteAdmin);

module.exports = router;