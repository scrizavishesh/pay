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

export const getAllOrders = async (searchData, pageNo, day, startDate, endDate) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/orders/?page=${pageNo}&search=${searchData}&date_filter=${day}&start_date=${startDate}&end_date=${endDate}&agent_id=2`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const getAgents = async (pageNo) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/users/getalluser/?page=${pageNo}`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getAgentsfor = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/users/online/`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getCreatorAgents = async (pageNo) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/users/created-by/?page=${pageNo}`, );
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getAgentsById = async (id) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/users/${id}`, );
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


export const getDashboardStatistic = async (day, startDate, endDate) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/statistics/payin/?date_filter=${day}&start_date=${startDate}&end_date=${endDate}`, );
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

export const CheckInAgent = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/agents/checkin/`,);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const CheckOutAgent = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/agents/checkout/`,);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const DownloadOrders = async (start_Date, end_date, id) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.get(`${API_URL}/api/orders/download-orders/?start_date=${start_Date}&end_date=${end_date}&agent_id=${id}`,);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const DownloadUserList = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.get(`${API_URL}/api/users/download-csv`,);
  if (response) {
    return response;
  } else {
    return [];
  }
}





