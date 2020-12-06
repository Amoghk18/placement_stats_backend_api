const express = require('express');
const {getBlogs, createBlog} = require("../controllers/blogs");
const router = express.Router();

router.route('/').get(getBlogs).post(createBlog);

module.exports = router;