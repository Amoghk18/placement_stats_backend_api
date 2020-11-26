const express = require("express");
const {
  getExperiences,
  createExperience,
} = require("../controllers/experiences");
const router = express.Router();

router.route("/").get(getExperiences).post(createExperience);

module.exports = router;
