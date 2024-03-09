const express = require("express");


const {getAboutInformation,updateAboutInformation} = require('../controllers/About')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const aboutRouter = express.Router();

aboutRouter.get('/',getAboutInformation)
aboutRouter.put('/',authentication,authorization('MANAGE_SITE'),updateAboutInformation)


module.exports = aboutRouter