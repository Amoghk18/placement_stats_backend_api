const asyncHandler = require("../middleware/async");
const Course = require("../models/Course");

// @desc        get all courses
// @route       GET  /api/v1/courses
// @access      student only
exports.getCourses = asyncHandler(async (req, res, next) => {
  const courses = await Course.find();
  res.status(200).json({
    success: true,
    data: courses,
  });
});

// @desc        create a course
// @route       POST  /api/v1/courses
// @access      admin only
exports.createCourse = asyncHandler(async (req, res, next) => {
    const course = await Course.create(req.body);
    res.status(201).json({
        success: true,
        data: course
    });
});