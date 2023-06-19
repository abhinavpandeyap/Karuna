import axios from 'axios';

const RECEIVER_BASE_URL = "http://localhost:8080/receiver";

class ReceiverService {

    registerReceiver(receiver){
        return axios.post(RECEIVER_BASE_URL + "/register", receiver);
    }

    viewItems(){
        return axios.get(RECEIVER_BASE_URL + "/items");
    }

    deleteAccount(receiverId){
        return axios.delete(RECEIVER_BASE_URL + `/${receiverId}`);
    }

    updateReceiver(updatedReceiver){
        return axios.put(RECEIVER_BASE_URL + "/profile", updatedReceiver);
    }

    login(dto){
        return axios.post(RECEIVER_BASE_URL + "/login", dto);
    }

    createRequest(reqDto){
        return axios.post(RECEIVER_BASE_URL + "/request", reqDto);
    }

    viewDonors(){
        return axios.get(RECEIVER_BASE_URL + "/donors");
    }

    viewHistory(receiverId){
        return axios.get(RECEIVER_BASE_URL + `/history/${receiverId}`);
    }

    receive(itemId, receiverId){
        return axios.put(`${RECEIVER_BASE_URL}/${itemId}/${receiverId}`);
    }

    logout(receiverId){
        return axios.get(RECEIVER_BASE_URL + `/logout/${receiverId}`);
    }
}

export default new ReceiverService();
