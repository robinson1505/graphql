const { where } = require("sequelize");
const { User, Post } = require("../config");

const resolvers = {
  Query: {
    posts: async () => {
      const posts = await Post.findAll({ include: [User] });
      return posts;
    },
    post: async (parent, { id }) => {
      const post = await Post.findByPk(id, { include: [User] });
      return post;
    }
  },
  Mutation: {
    createPost: async (parent, { title, body, userId }) => {
      const post = await Post.create({ title, body, UserId: userId });
      return post;
    },
    updatePost: async (parent, { id, title, body, userId }) => {
      await Post.update(
        { title, body, userId },
        {
          where: id
        }
      );
      const post = await Post.findByPk(id, { include: [User] });
      return post;
    },
    deletePost: async (parent, { id }) => {
      const post = await Post.findByPk(id);
      await post.destroy();
      return true;
    }
  }
};

module.exports = resolvers;
