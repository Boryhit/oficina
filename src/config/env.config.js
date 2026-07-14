import dotenv from "dotenv";
dotenv.config();

export const env = {
  app_port: process.env.APP_PORT,
  app_name: process.env.APP_NAME,
  db_uri: process.env.DB_URI,
  jwt_secret: process.env.JWT_SECRET || "dev-secret-change-me",
  jwt_expires: process.env.JWT_EXPIRES || "1d",
};
