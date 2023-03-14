const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.findAll();
      return users;
    },
    user: async (parent, { id }) => {
      const user = await user.findByPk(id);
      return user;
    }
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    updateUser: async (parent, { id, username, email, password }) => {
      await User.update(
        { username, email, password },
        {
          where: {
            id
          }
        }
      );
      const user = await User.findByPk(id);
      return user;
    },
    deleteUser: async (parent, { id }) => {
      const user = await User.findByPk(id);
      await user.destroy();
      return true;
    }
  }
};

module.exports = resolvers;
