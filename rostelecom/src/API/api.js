import axios from "axios";
import { Cookies } from 'react-cookie';

export default class PostService {
    static async getById(id) {
        const response = await axios.get('https://rostelekek.herokuapp.com/service/'+id);
        return response;
    }

    static async getService(category) {
        const response = await axios.get(`https://rostelekek.herokuapp.com/service?category=${category}`);
        return response;
    }

    static async getUser(accessToken) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.get('https://rostelekek.herokuapp.com/customer/me',{'headers': {'Authorization': AuthStr}})
        return response;
    }
}