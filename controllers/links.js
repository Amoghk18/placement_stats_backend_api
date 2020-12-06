const asyncHandler = require("../middleware/async");
const Link = require("../models/Link");

// @desc        get all links
// @route       GET  /api/v1/links
// @access      student only
exports.getLinks = asyncHandler(async (req, res, next) => {
  const links = await Link.find();
  res.status(200).json({
    success: true,
    data: links,
  });
});

// @desc        create a link
// @route       POST  /api/v1/links
// @access      admin only
exports.createLink = asyncHandler(async (req, res, next) => {
    const link = await Link.create(req.body);
    res.status(201).json({
        success: true,
        data: link
    });
});