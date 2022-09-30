const Router = require("express");
const router = new Router();
const courseController = require("../controllers/courseController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, courseController.create);
router.get("/", authMiddleware);

module.exports = router;
