const express = require("express");


const {getAboutMeInformation,updateAboutMeInformation} = require('../controllers/AboutMe')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const aboutMeRouter = express.Router();

aboutMeRouter.get('/',getAboutMeInformation)
aboutMeRouter.put('/',authentication,authorization('MANAGE_SITE'),updateAboutMeInformation)


module.exports = aboutMeRouter