import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://studentjobportal.onrender.com/api" ||"http://localhost:4001/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
