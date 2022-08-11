import axiosInstance from '../../utils/axiosInstance'

const PROFILE_ME = "/api/v1/profiles/me/";

const getProfile = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axiosInstance.get(PROFILE_ME, config);

    return response.data;
};

const profileService = {getProfile};

export default profileService;