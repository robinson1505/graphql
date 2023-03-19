export default (sequelize, Datatypes) => {
  const Blog = sequelize.define("Blog", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false
    },
    description: {
      type: Datatypes.TEXT,
      allowNull: false
    }
  });
  return Blog
};
