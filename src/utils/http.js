import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(response => {
    return response
}, err => {
    return Promise.resolve(err.response)
})

export default {
    post(url, data){
        return axios({
            method: 'post',
            baseURL: 'http://127.0.0.1:3000',
            url,
            data,
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + localStorage.getItem('flame_token')
            }
        }).then(
             (res) => {
                 return res.data
             }
        )
    },
    get(url, params){
        return axios({
            method: 'get',
            baseURL: 'http://127.0.0.1:3000',
            url,
            params,
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer ' + localStorage.getItem('flame_token')
            }
        }).then(
            (res) => {
                return res.data
            }
        )
    }
}