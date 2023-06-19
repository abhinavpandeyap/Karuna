import axios from 'axios';

const API_URL = 'http://localhost:8080/donor';

class DonorService {
  registerDonor(donor) {
    return axios.post(`${API_URL}/register`, donor);
  }

  viewCampaign() {
    return axios.get(`${API_URL}/campaigns`);
  }

  deleteDonor(donorId) {
    return axios.delete(`${API_URL}/${donorId}`);
  }

  updateDonor(donor,donorId) {
    return axios.put(`${API_URL}/profile/${donorId}`, donor);
  }

  donateItem(item,donorId) {
    return axios.post(`${API_URL}/donate/${donorId}`, item);
  }

  login(dto) {
    return axios.post(`${API_URL}/login`, dto);
  }

  viewReceivers() {
    return axios.get(`${API_URL}/receivers`);
  }

  viewHistory(donorId) {
    return axios.get(`${API_URL}/history/${donorId}`);
  }

  logout(donorId) {
    return axios.get(`${API_URL}/${donorId}`);
  }
}

export default new DonorService();
