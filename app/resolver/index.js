import authorResolvers from "./author.resolver.js";
import blogResolvers from "./blog.resolver.js";
import postResolvers from "./post.resolver.js";

const resolvers = [authorResolvers, blogResolvers, postResolvers];
export default resolvers;