import { BlogModel, PostModel } from "../model/index.js";


const blogResolvers = {
  Query: {
    blogs: async (parent) => {
      try {
        const data = await BlogModel.findAll({ include: [PostModel] });
   
        return data;
      } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error("Error fetching data");
      }
    }
  }
};

export default blogResolvers;
