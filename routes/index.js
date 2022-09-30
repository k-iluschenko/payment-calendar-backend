const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const courseRouter = require("./courseRouter");
const lessonRouter = require("./lessonRouter");
const statusRouter = require("./statusRouter");
const paymentRouter = require("./paymentRouter");

router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/lesson", lessonRouter);
router.use("/status", statusRouter);
router.use("/payment", paymentRouter);

module.exports = router;
