const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  logoUrl: { type: String },
  facebookUrl: { type: String },
  linkedinUrl: { type: String },
  twitterUrl: { type: String },
  instagramUrl: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
  email: { type: String }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
