const express = require("express");


const {adminLoging} = require('../controllers/Admin')

const {updateAboutInformation} = require('../controllers/About')


const adminRouter = express.Router();

adminRouter.post('/',adminLoging)



module.exports = adminRouter