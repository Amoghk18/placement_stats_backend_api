const asyncHandler = require("../middleware/async");
const CompanyYear = require("../models/CompanyYears");

// @desc        get all companies and respective years
// @route       GET  /api/v1/companyyear
// @access      student only
exports.getCompanyYears = asyncHandler(async (req, res, next) => {
  const company_years = await CompanyYear.find();
  res.status(200).json({
    success: true,
    data: company_years,
  });
});

// @desc        create a company_year
// @route       POST  /api/v1/companyyear
// @access      recruiter only
exports.createCompanyYear = asyncHandler(async (req, res, next) => {
  const company = await CompanyYear.findOne({ company: req.body.company });

  if (company) {
    const company_year = await CompanyYear.update(
      { company: req.body.company },
      { years: [...company.years, req.body.year] }
    );
    res.status(201).json({
      success: true,
      data: company_year,
    });
  } else {
    const company_year = await CompanyYear.create({
      company: req.body.company,
      years: [req.body.year],
    });
    res.status(201).json({
        success: true,
        data: company_year
    });
  }
});
