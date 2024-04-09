import axios from "axios";

export const API_URL = "https://auth.upicollect.com";

var bearerToken = `Token ${localStorage.getItem("token")}`


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


export const getAgents = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/users/getalluser/`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const createFund = async (requestData, orderId, recId, id) => {
  axios.defaults.headers.common["Authorization"] = "";
  var response = await axios.post(`${API_URL}/api/payments/create?order_id=${orderId}&receipt_id=${recId}&id=${id}`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const getDashboardStatistic = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/statistics/payin/`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const Orderapproval = async (requestData, id, orderId) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.post(`${API_URL}/api/orders/agent/${id}/${orderId}/`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const getAgentOrders = async (id) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/orders/agent/${id}`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const CreateUsers = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/users/`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const UpdatesUsers = async (requestData, id) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.patch(`${API_URL}/api/users/${id}/`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}





