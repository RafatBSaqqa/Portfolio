const express = require("express");


const {adminLoging} = require('../controllers/Admin')



const adminRouter = express.Router();

adminRouter.post('/',adminLoging)



module.exports = adminRouter