import { Sequelize } from "sequelize";
import { PASSWORD, DATABASE, USERNAME, HOST, DIALECT } from "./config.js";

console.log(PASSWORD);
//? Create database connection
const db = new Sequelize(
  DATABASE,
  USERNAME,
  PASSWORD,
  {
    host: HOST,
    dialect: DIALECT
  }
);

//  db.sync({alter:true})
// ? CHECK FOR CONNECTION
db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully🔥.");
  })
  .catch(err => console.error("Unable to connect to the database:", err));


export default db;