import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const signUp = (data) => API.post("/users/signup", data);
export const login = (data) => API.post("/users/login", data);
