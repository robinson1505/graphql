const userResolvers = require("./user.resolver");
const postResolvers = require("./post.resolver");
const commentResolvers = require("./comment.resolver");
module.exports = [userResolvers, postResolvers, commentResolvers];
