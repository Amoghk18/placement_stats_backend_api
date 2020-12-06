const asyncHandler = require("../middleware/async");
const Blog = require("../models/Blog");

// @desc        get all blogs
// @route       GET  /api/v1/blogs
// @access      student only
exports.getBlogs = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find();
  res.status(200).json({
    success: true,
    data: blogs,
  });
});

// @desc        create a blog
// @route       POST  /api/v1/blogs
// @access      admin only
exports.createBlog = asyncHandler(async (req, res, next) => {
    const blog = await Blog.create(req.body);
    res.status(201).json({
        success: true,
        data: blog
    });
});