import axios from 'axios'
import { baseUrl } from '../config/api.config'
import { getSto } from '../utils/storage'
import { Toast } from 'vant'
axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 10000;

axios.interceptors.request.use(async function (config) {

    let token = await getSto('token');

    if (token != null) {
        config.headers.token = token;
    }

    return config;
  }, function (error) {
    return Promise.reject(error);
});
 

axios.interceptors.response.use(function (response) {
    console.log(response.data);
    const data = response.data;
    if (data.code == 0) {
        return data;
    } else {
        Toast(data.msg);
        return data;
    }
  }, function (error) {
    Toast('网络错误，请稍后重试')
    return Promise.reject(error);
  });

function http (url, data, method = 'get') {

    let options = {
        url,
    }

    if(method == 'post') {
        options.method = 'post';
        options.data = data;
    } else {
        options.params = data;
    }

    return new Promise((resolve, reject) => {
        axios(options).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

export const get = async (url, data) => {
    return await http(url, data);
}

export const post = async (url, data) => {
    return await http(url, data, 'post')
}