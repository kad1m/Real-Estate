import axios from "axios";

const REGISTER_URL = "/api/v1/auth/users/";
const LOGIN_URL = "/api/v1/auth/jwt/create/";
const ACTIVATE_URL = "/api/v1/auth/users/activation/";
const RESET_PASSWORD_URL = "/api/v1/auth/users/reset_password/"
const CONFIRM_RESET_PASSWORD_URL = "/api/v1/auth/users/reset_password_confirm/"


// Register user
const register = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axios.post(REGISTER_URL, userData, config);
    return response.data;
};

// Login user

const login = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(LOGIN_URL, userData, config);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");

}

const activate = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(ACTIVATE_URL, userData, config);
    return response.data;
};

const reset_password = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(RESET_PASSWORD_URL, userData, config);
    return response.data;
};

const confirm_reset_password = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(CONFIRM_RESET_PASSWORD_URL, userData, config);
    return response.data;
};

const authService = {register, login, logout, activate, reset_password, confirm_reset_password};

export default authService;