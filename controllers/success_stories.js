const asyncHandler = require("../middleware/async");
const SuccessStory = require("../models/success_story");

// @desc        get all success_stories
// @route       GET  /api/v1/successstories
// @access      student only
exports.getSuccessStories = asyncHandler(async (req, res, next) => {
  const success_stories = await SuccessStory.find();
  res.status(200).json({
    success: true,
    data: success_stories,
  });
});

// @desc        create a success_story
// @route       POST  /api/v1/successstories
// @access      admin only
exports.createSuccessStory = asyncHandler(async (req, res, next) => {
    const success_story = await SuccessStory.create(req.body);
    res.status(201).json({
        success: true,
        data: success_story
    });
});