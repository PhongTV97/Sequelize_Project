import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
}

export const createAccount = async (body) => {
  return await axios.post(process.env.REACT_APP_URL_API + '/create-account', body, {headers} );
};
