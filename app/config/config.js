import { config } from "dotenv";
config("../../.env");

export const HOST = process.env.HOST;
export const DATABASE = process.env.DATABASE;
export const USERNAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;
export const DIALECT = process.env.DIALECT;
export const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};


