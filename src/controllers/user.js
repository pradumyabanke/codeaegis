const Company = require('../models/companyModel');

// Controller functions
async function createCompany(req, res) {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getAllCompanies(req, res) {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getCompanyById(req, res) {
  try {
    const company = await Company.findById(req.params.id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteCompany(req, res) {
  try {
    const company = await Company.findByIdAndRemove(req.params.id);
    if (company) {
      res.json({ message: 'Company deleted' });
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  deleteCompany
};
