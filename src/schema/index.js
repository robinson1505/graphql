const { gql } = require("apollo-server-express");

const userSchema = require("./user");
const postSchema = require("./post");
const commentSchema = require("./comment");

const linkSchema = gql`
type Query{
    _:Boolean
}
type Mutation{
    _:Boolean
}
type Subscription{
    _Boolean
}
`;

module.exports = [linkSchema, userSchema, postSchema, commentSchema];
