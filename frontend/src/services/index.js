import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const testApi = async () => {
  console.log("aaa", process.env.REACT_APP_URL_API);
  return await axios.get(process.env.REACT_APP_URL_API);
};
