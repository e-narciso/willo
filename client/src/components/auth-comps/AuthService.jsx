import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.NODE_ENV === "production" ? "/api ": "http://localhost:5000/api",
      withCredentials: true
    });
    this.service = service;
  }

  getUser = async () => {
    const response = await this.service.get("/theUser");
    // console.log(response);
    return response.data;
  }

  loggedin = async () => {
    const response = await this.service.get("/loggedin");
    return response.data;
  };

  signup = async (username, password) => {
    const response = await this.service.post("/signup", { username, password });
    return response.data;
  };

  login = async (username, password) => {
    const response = await this.service.post("/login", { username, password });
    return response.data;
  };
  logout = async () => {
    const response = await this.service.post("/logout", {});
    return response.data;
  };

  getWisps = async () => {
    const response = await this.service.get("/populate");
    return response.data;
  }

}

export default AuthService;
