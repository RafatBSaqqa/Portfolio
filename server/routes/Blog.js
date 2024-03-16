const express = require("express");


const {getBlogInformation,updateBlogInformation} = require('../controllers/Blog')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const blogRouter = express.Router();

blogRouter.get('/',getBlogInformation)
blogRouter.put('/',authentication,authorization('MANAGE_SITE'),updateBlogInformation)


module.exports = blogRouter