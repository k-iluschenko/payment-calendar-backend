const Router = require("express");
const router = new Router();
const PaymentController = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, PaymentController.create);
router.get("/", authMiddleware, PaymentController.getAll);

module.exports = router;
