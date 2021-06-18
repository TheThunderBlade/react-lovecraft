import axios from "axios";
import {removeUser, setUser} from "../store/reducers/userReducer";

export const registration = async (email, password, nickname) => {
    try {
        const response = await axios.post(`/api/auth/register`, {
            email, password, nickname
        })

        return response.data.message
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`/api/auth/login`, {
                email, password
            })

            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const setUserImageHandler = async (email, avatar) => {
    try {
        const response = await axios.post('/api/user/setUserImage', {
            email, avatar
        })

        alert(response.data.message)
    }catch (e) {
        alert(e.response.data.message)
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token')
        dispatch(removeUser())
        window.location.replace('/')
    }
}
