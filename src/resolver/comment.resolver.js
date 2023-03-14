const { User, Post, Comment } = require("../models");

const resolvers = {
  Query: {
    comments: async () => {
      const comments = await Comment.findAll({ include: [User, Post] });
      return comments;
    },
    comment: async (parent, { id }) => {
      const comment = await Comment.findByPk(id, { include: [User, Post] });
      return comment;
    }
  },
  Mutation: {
    createComment: async (parent, { body, userId, postId }) => {
      const comment = await Comment.create({
        body,
        UserI: userId,
        PostId: postId
      });
      return comment;
    },
    updateComment: async (parent, { id, body, userId, postId }) => {
      await Comment.update(
        {
          body,
          UserId: userId,
          PostId: postId
        },
        { where: id }
      );
      const comment = await Comment.findByPk(id, { include: [User, Post] });
      return comment;
    },
    deleteComment: async (parent, { id }) => {
      const comment = await Comment.findByPk(id);
      await comment.destroy();
      return true;
    }
  }
};
module.exports = resolvers;
