import Sequelize from "sequelize";
import sequelize from "../config/db.config.js";
import Author from "./author.model.js";
import Blog from "./blog.model.js";
import Post from "./post.model.js";

export const AuthorModel = Author(sequelize, Sequelize);
export const BlogModel = Blog(sequelize, Sequelize);
export const PostModel = Post(sequelize, Sequelize);
BlogModel.hasMany(PostModel);
PostModel.belongsTo(BlogModel);
AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);


