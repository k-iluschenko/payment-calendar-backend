const ApiError = require("../error/ApiError");
const { Course, Lesson, Status } = require("../models/models");

class CourseController {
  async create(req, res) {
    try {
      const { title, description, price, dates } = req.body;
      const course = await Course.create({
        title,
        description,
        price,
        userId: req.user.id,
      });

      // TODO: при создании курса передаются даты уроков за выбранный период (считаем на фронте)

      return res.json(course);
    } catch (err) {
      return ApiError.badRequest(err.status);
    }
  }

  async getAll(req, res) {}
}

module.exports = new CourseController();
