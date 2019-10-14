import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true
    });
    this.service = service;
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
}

export default AuthService;
