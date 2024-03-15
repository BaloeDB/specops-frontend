import axios from "axios";

const api = axios.create({
  baseURL: "https://specops-latest.onrender.com/",
  /*params: {
    key: "",
  },*/
});

export default api;
