import axios from '@/api/axios'

const  register = credentials => {
    return axios.post('/users',{user: credentials}) // создание API запроса данных
}
const  login = credentials => {
    return axios.post('/users/login',{user: credentials}) // создание API запроса данных
}
const getCurrentUser = () => {
    return axios.get('/user')
}

const updateCurrentUser = currentUserInput => {
    return axios
        .put('/user', {user: currentUserInput})
        .then(response => response.data.user)
}
export default {
    register,
    login,
    getCurrentUser,
    updateCurrentUser
}
