import Sequelize from "sequelize";
import sequelize from "../config/db.config.js";
import Author from "./author.model.js";
import Blog from "./blog.model.js";
import Post from "./post.model.js";


const AuthorModel = Author(sequelize, Sequelize);
const BlogModel = Blog(sequelize, Sequelize);
const PostModel = Post(sequelize, Sequelize);


BlogModel.hasMany(PostModel);
PostModel.belongsTo(BlogModel);
AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

export { AuthorModel, BlogModel, PostModel };
