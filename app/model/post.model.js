export default(sequelize,DataTypes) =>{
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },{timestamps: false,freezeTableName: true});
  return Post;

}
  