const express = require("express");


const {getBlogInformation,updateBlogInformation,createBlogInformation} = require('../controllers/Blog')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const blogRouter = express.Router();

blogRouter.get('/',getBlogInformation)
blogRouter.put('/:id',authentication,authorization('MANAGE_SITE'),updateBlogInformation)

blogRouter.post('/',authentication,authorization('MANAGE_SITE'),createBlogInformation)

module.exports = blogRouter