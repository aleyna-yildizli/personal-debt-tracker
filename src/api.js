import axios from "axios";

const BASE_URL = "https://study.logiper.com";

export const createApiInstance = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
        },
    });
}


let API = createApiInstance();

const renewAPI = () => {
    API = createApiInstance();
};

renewAPI();

export { API, renewAPI };
