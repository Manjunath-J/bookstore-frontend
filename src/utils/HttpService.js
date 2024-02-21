import axios from "axios";

const baseURL = "http://localhost:3000/api/v1/";

export const getAllBooks = async (endpoint) => {
  try {
    return await axios.get(baseURL + endpoint);
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (endpoint) => {
  try {
    console.log(endpoint);
    return await axios.get(baseURL + endpoint);
  } catch (error) {
    console.log(error);
  }
}
