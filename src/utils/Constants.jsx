import axios from "axios";

export const API_URL = "https://auth.upicollect.com";

// const bearerToken = JSON.parse(localStorage.getItem("HRMS token"));
var bearerToken = `Token ${localStorage.getItem("token")}`
// var bearerToken = `Bearer 30|vD2mT6OIa1Iu7kGYkeFTMLHiICEvpRpRNZnJ8OXZe3263e80`
// console.log(bearerToken, "Token")


export const Loginuse = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = "";

  var response = await axios.post(`${API_URL}/api-token-auth/`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const LoginSuccess = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = `Token ${requestData}`;
  var response = await axios.get(`${API_URL}/api/users/`,);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const createOrder = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.post(`${API_URL}/api/orders/`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getAllOrders = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/orders/`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const createFund = async (requestData, payid) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.post(`${API_URL}/${payid}`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}


