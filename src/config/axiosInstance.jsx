import axios from "axios";

const axiosInstance = axios.create( {
    baseURL: "https://api.teamsync.space",
    withCredentials: true,
});

export default axiosInstance();