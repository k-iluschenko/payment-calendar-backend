const ApiError = require("../error/ApiError");
const { Payment } = require("../models/models");
class PaymentController {
  async create(req, res) {
    const { date, sum, courseId } = req.body;
    const payment = await Payment.create({ date, sum, courseId });
    return res.json(payment);
  }

  async getAll(req, res, next) {
    // TODO: Добавить фильтрацию по пользователю и возвращать только его платежи
    const payments = await Payment.findAll();
    return res.json(payments);
  }
}

module.exports = new PaymentController();
