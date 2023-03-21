import { AuthorModel, PostModel } from "../model/index.js";

const authorResolvers = {
  Query: {
    authors: async (parent) => {
      try {
        const authors = await AuthorModel.findAll({ include: [PostModel] });
        return authors;
      } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error("Error fetching data");
      }
    }
  }
};

export default authorResolvers;
