import axios from "axios";

const axiosInstance = axios.create( {
    baseURL: "https://team-sync-backend-n78w.onrender.com/api",
    withCredentials: true,
});

export default axiosInstance;