const asyncHandler = require("../middleware/async");
const Ebook = require("../models/Ebook");

// @desc        get all ebooks
// @route       GET  /api/v1/ebooks
// @access      student only
exports.getEbooks = asyncHandler(async (req, res, next) => {
  const ebooks = await Ebook.find();
  res.status(200).json({
    success: true,
    data: ebooks,
  });
});

// @desc        create a ebook
// @route       POST  /api/v1/ebooks
// @access      admin only
exports.createEbook = asyncHandler(async (req, res, next) => {
    const ebook = await Ebook.create(req.body);
    res.status(201).json({
        success: true,
        data: ebook
    });
});