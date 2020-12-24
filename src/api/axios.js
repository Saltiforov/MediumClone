import axios from 'axios'
import {getItem} from "@/helpers/parsistanceStorage";

axios.defaults.baseURL = 'https://conduit.productionready.io/api'

axios.interceptors.request.use(config => {
    const token = getItem('accessToken')
    const authorizationToken = token ? `Token ${token}` : ''
    console.log('authorizationToken')
    config.headers.Authorization = authorizationToken
    return config
})

export default axios
