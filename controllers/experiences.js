//const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Experience = require("../models/Experience");

// @desc        get all experiences
// @route       GET  /api/v1/experiences
// @access      student only
exports.getExperiences = asyncHandler(async (req, res, next) => {
  const experiences = await Experience.find();
  res.status(200).json({
    success: true,
    data: experiences,
  });
});

// @desc        Create an experience
// @route       POST  /api/v1/experiences
// @access      student only
exports.createExperience = asyncHandler(async (req, res, next) => {
  const experience = await Experience.create(req.body);
  res.status(201).json({
    success: true,
    data: experience,
  });
});
