import axios from "axios";
import { Cookies } from 'react-cookie';

export default class PostService {
    static async getService(category) {
        const response = await axios.get(`https://rostelekek.herokuapp.com/service?category=${category}`);
        return response;
    }
}