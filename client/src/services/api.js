import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api/employees" });
// const userAPI = axios.create({baseURL: 'http://localhost:4000/api/auth'})

export default API;
