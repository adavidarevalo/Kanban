import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/api`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;