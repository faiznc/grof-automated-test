import * as dotenv from "dotenv";
dotenv.config(); // Load the .env file

export const config = {
  baseUrl: process.env.BASE_URL as string
};
