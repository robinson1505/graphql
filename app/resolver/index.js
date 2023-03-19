import { BlogModel } from "../model/index.js";

const resolvers = {
  Query: {
    blogs: async () => {
      try {
        const blogs = await BlogModel.findAll();
        return blogs;
      } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error("Error fetching data");
      }
    }
  }
};


export default resolvers;
