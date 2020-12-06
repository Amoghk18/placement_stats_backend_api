const asyncHandler = require("../middleware/async");
const Schedule = require("../models/Schedule");

// @desc        get all schedules
// @route       GET  /api/v1/schedules
// @access      student only
exports.getSchedules = asyncHandler(async (req, res, next) => {
  const schedules = await Schedule.find();
  res.status(200).json({
    success: true,
    data: schedules,
  });
});

// @desc        create a schedule
// @route       POST  /api/v1/schedules
// @access      admin, recruiter only
exports.createSchedule = asyncHandler(async (req, res, next) => {
    const schedule = await Schedule.create(req.body);
    res.status(201).json({
        success: true,
        data: schedule
    });
});