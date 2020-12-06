const express = require('express');
const {getSuccessStories, createSuccessStory} = require("../controllers/success_stories");
const router = express.Router();

router.route('/').get(getSuccessStories).post(createSuccessStory);

module.exports = router;