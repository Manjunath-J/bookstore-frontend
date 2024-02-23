import axios from "axios";

const baseURL = "http://localhost:3000/api/v1/";

const header={
  'Authorization': `Bearer ${localStorage.getItem("Token")}`
}

export const createUser = async (endpoint, body) => {
  try {
    return await axios.post(baseURL + endpoint, body)
  } catch (error) {
    console.log(error);
  }
}

export const login = async (endpoint, body) => {
  try{
    const response = await axios.post(baseURL + endpoint, body)
    localStorage.setItem("Token", response?.data.data);
    return
   }
   catch(error){
       console.log(error);
   }
};

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
