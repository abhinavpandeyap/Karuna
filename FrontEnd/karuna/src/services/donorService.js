import axios from 'axios';

const baseURL = 'http://localhost:8080';


export const registerDonor = async (donor) => {
  try {
    const response = await axios.post(`${baseURL}/donor/register`, donor);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginDonor = async (loginDTO) => {
  try {
    const response = await axios.post(`${baseURL}/donor/login`, loginDTO);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutDonor = async (donorId) => {
  try {
    const response = await axios.post(`${baseURL}/donor/logout/${donorId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateAccount = async (donorId, donor) => {
  try {
    const response = await axios.put(`${baseURL}/donor/${donorId}`, donor);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteAccount = async (donorId) => {
  try {
    const response = await axios.delete(`${baseURL}/donor/${donorId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const donateToReceiver = async (receiverId, donorId, item) => {
  try {
    const response = await axios.post(
      `${baseURL}/donor/donate/receiver/${receiverId}/donor/${donorId}`,
      item
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const donate = async (donorId, item) => {
  try {
    const response = await axios.post(`${baseURL}/donor/donate/donor/${donorId}`, item);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const donateToCampaign = async (campaignId, donorId, item) => {
  try {
    const response = await axios.post(
      `${baseURL}/donor/donate/campaign/${campaignId}/donor/${donorId}`,
      item
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const viewHistory = async (donorId) => {
  try {
    const response = await axios.get(`${baseURL}/donor/history/${donorId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const viewReceivers = async () => {
  try {
    const response = await axios.get(`${baseURL}/donor/receivers`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const viewCampaigns = async () => {
  try {
    const response = await axios.get(`${baseURL}/donor/campaigns`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
