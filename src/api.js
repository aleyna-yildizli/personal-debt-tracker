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



{/* 
API yenileme işlemi, kullanıcı giriş yaptığında veya kayıt olduğunda alınan token'ın tüm isteklerde kullanılmasını sağlamak için yapılır.
 Bu, güvenliği ve geçerliliği sağlar. Yeni token alındığında, bu token'ı kullanacak şekilde 
axios instance'ınızı yeniden yapılandırmak gereklidir. Bu nedenle, renewAPI fonksiyonu kullanılır ve yeni token alındığında API nesnesini günceller.
*/}