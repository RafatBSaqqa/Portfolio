const express = require("express");


const {getContactInformation,updateContactInformation} = require('../controllers/Contact')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const contactRouter = express.Router();

contactRouter.get('/',getContactInformation)
contactRouter.put('/',authentication,authorization('MANAGE_SITE'),updateContactInformation)


module.exports = contactRouter