import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Base URL for all API calls
  timeout: 10000,  // Optional: Request timeout
});

// Optional: Add interceptors for authentication or error handling
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token or modify headers here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
