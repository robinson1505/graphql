import {BlogModel,PostModel,AuthorModel} from "../model/index.js"


const postResolvers = {
  Query: {
    posts: async (parent) => {
      try {
        const data = await PostModel.findAll({
          include:[ {model:BlogModel},{model:AuthorModel}]
        });
        return data;
      } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error("Error fetching data");
      }
    }
  }
};

export default postResolvers;
