const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const companyController = require("../controllers/user");
const Middleware = require("../middleware/auth")


//=========================[ End Points ]===========================================/

Router.post('/companies', companyController.createCompany);
Router.get('/companies', companyController.getAllCompanies);
Router.get('/companies/:id', companyController.getCompanyById);
Router.delete('/companies/:id', companyController.deleteCompany);

module.exports = Router;





Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));

//===================== checking your end point valid or not =======================//

Router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
});


module.exports = Router;
