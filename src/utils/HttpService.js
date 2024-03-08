import axios from "axios";

const baseURL = "http://localhost:3000/api/v1/";

//User

export const createUser = async (endpoint, body) => {
  try {
    return await axios.post(baseURL + endpoint, body);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (endpoint, body) => {
  try {
    const response = await axios.post(baseURL + endpoint, body);
    localStorage.setItem("Token", response?.data.data);
    return;
  } catch (error) {
    console.log(error);
  }
};

//Books

export const getAllBooks = async (endpoint) => {
  try {
    return await axios.get(baseURL + endpoint);
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (endpoint) => {
  try {
    return await axios.get(baseURL + endpoint);
  } catch (error) {
    console.log(error);
  }
};

export const searchBook = async (endpoint) => {
  try {
    return await axios.get(baseURL + endpoint);
  } catch (error) {
    console.log(error);
  }
};

//WishList

export const getWishList = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.get(baseURL + endpoint, { headers: header });

    const bookData = response.data;

    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const updateWishlist = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };

    const response = await axios.post(
      baseURL + endpoint,
      {},
      { headers: header }
    );

    const bookData = response.data;

    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const removeWishlist = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.delete(baseURL + endpoint, {
      headers: header,
    });

    const bookData = response.data;

    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

//Cart

export const getCart = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.get(baseURL + endpoint, { headers: header });

    const bookData = response.data;

    return bookData;
  } catch (error) {
    // Handle errors
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const updateCart = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.post(
      baseURL + endpoint,
      {},
      { headers: header }
    );
    const bookData = response.data;

    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const removeCart = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.delete(baseURL + endpoint, {
      headers: header,
    });

    const bookData = response.data;

    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const deleteCart = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.delete(baseURL + endpoint, {
      headers: header,
    });

    const bookData = response.data;

    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

//Orders

export const getOrders = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const orderData = await axios.get(baseURL + endpoint, { headers: header });
    return orderData;
  } catch (error) {
    throw error;
  }
};

export const placeOrder = async (endpoint, data) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };

    const response = await axios.post(
      baseURL + endpoint,
      { data: data },
      { headers: header }
    );

    const bookData = response.data;

    return bookData;
  } catch (error) {
    console.log("Error fetching books:", error);
    throw error;
  }
};

//Address

export const getAddress = async (endpoint) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.get(baseURL + endpoint, { headers: header });

    const address = response.data;

    return address;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const addAddress = async (endpoint, data) => {
  try {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    };
    const response = await axios.post(
      baseURL + endpoint,
      { data },
      { headers: header }
    );

    const addressData = response.data;

    return addressData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
