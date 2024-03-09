const express = require("express");


const {getProjectInformation,updateProjectInformation,createProjectInformation,deleteProjectInformation} = require('../controllers/Projects')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')


const projectRouter = express.Router();

projectRouter.get('/',getProjectInformation)
projectRouter.put('/:id',authentication,authorization('MANAGE_SITE'),updateProjectInformation)
projectRouter.post('/',authentication,authorization('MANAGE_SITE'),createProjectInformation)
projectRouter.delete('/:id',authentication,authorization('MANAGE_SITE'),deleteProjectInformation)


module.exports = projectRouter