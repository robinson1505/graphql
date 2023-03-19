import books from "../model/index.js"

const resolvers = {
  Query: {
    books: () => books
  }
};
export default resolvers;
