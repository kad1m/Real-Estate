import axios from "axios";
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

const BASE_URL = '/'

let authToken = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${authToken?.access}`
    }
})

axiosInstance.interceptors.request.use(async req => {
    if (!authToken) {
        authToken = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null
        req.headers['Authorization'] = `Bearer ${authToken?.access}`
    }
    const user = jwt_decode(authToken.access)
    const isExp = dayjs.unix(user.exp).diff(dayjs()) < 1
    console.log("isExp:", isExp)
    if (!isExp) return req

    const response = await axios.post('/api/v1/auth/jwt/refresh/', {
        'refresh': authToken.refresh
    })
    localStorage.setItem("user", JSON.stringify(response.data))
    req.headers['Authorization'] = `Bearer ${response.data.access}`

    return req;
}, function (error) {

    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {

    return response;
}, function (error) {

    return Promise.reject(error);
});

export default axiosInstance

