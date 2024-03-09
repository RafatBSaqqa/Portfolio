const express = require("express");


const {getPersonalInformation,updatePersonalInformation} = require('../controllers/Home')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const homeRouter = express.Router();

homeRouter.get('/',getPersonalInformation)
homeRouter.put('/',authentication,authorization('MANAGE_SITE'),updatePersonalInformation)


module.exports = homeRouter