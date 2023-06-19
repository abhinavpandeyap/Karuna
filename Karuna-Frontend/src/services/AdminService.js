import axios from 'axios';

const baseUrl = 'http://localhost:8080/admin';

const AdminService = {
  login: (loginDto) => {
    return axios.post(`${baseUrl}/login`, loginDto);
  },

  logout: (staffId) => {
    return axios.get(`${baseUrl}/${staffId}`);
  },

  viewStaffs: () => {
    return axios.get(`${baseUrl}/staffs`);
  },

  viewRequests: () => {
    return axios.get(`${baseUrl}/requests`);
  },

  addCampaign: (campaign) => {
    return axios.post(`${baseUrl}/campaign`, campaign);
  },

  updateCampaign: (campaign) => {
    return axios.put(`${baseUrl}/campaign`, campaign);
  },

  deleteCampaign: (campaignId) => {
    return axios.delete(`${baseUrl}/${campaignId}`);
  },

  removeDonor: (donorId) => {
    return axios.delete(`${baseUrl}/${donorId}`);
  },

  removeReceiver: (receiverId) => {
    return axios.delete(`${baseUrl}/${receiverId}`);
  },

  addStaff: (staff) => {
    return axios.post(`${baseUrl}/staff`, staff);
  },

  updateStaff: (staff) => {
    return axios.put(`${baseUrl}/staff`, staff);
  },

  deleteStaff: (staffId) => {
    return axios.delete(`${baseUrl}/${staffId}`);
  },

  viewDonorLocation: (donorId) => {
    return axios.get(`${baseUrl}/donor_location/${donorId}`);
  },

  viewReceiverLocation: (receiverId) => {
    return axios.get(`${baseUrl}/receiver_location/${receiverId}`);
  },

  checkPaymentStatus: (paymentId) => {
    return axios.get(`${baseUrl}/payment_status/${paymentId}`);
  },
};

export default AdminService;
