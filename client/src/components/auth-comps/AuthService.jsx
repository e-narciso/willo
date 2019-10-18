import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.NODE_ENV === "production" ? "/api": "http://localhost:5000/api",
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

  edit = async (args) => {
    const response = await this.service.post("/profile/edit", {args});
    return response.data;
  }

  login = async (username, password) => {
    const response = await this.service.post("/login", { username, password });
    return response.data;
  };

  logout = async () => {
    const response = await this.service.post("/logout", {});
    return response.data;
  };

  async handleUpload (theFile) {
    try {
      const response = await this.service.post('/upload', theFile);
      return response.data;
    }
    catch (err) {
      return console.log(err);
    }
  }

  getWisps = async () => {
    const response = await this.service.get("/populate");
    return response.data;
  }

  getUsers = async () => {
    // console.log('09090;;;;')
    const response = await this.service.get("/users");
    // console.log(response, '09090909')
    return response.data;
  }

  follow = async (userID, friendID) => {
    const response = await this.service.post("/follow", {userID, friendID});
    return response.data;
  }

  unfollow = async (userID, friendID) => {
    const response = await this.service.post("/unfollow", {userID, friendID});
    return response.data;
  }

  makeWisp = async (content) => {
    const response = await this.service.post("/", {content});
    // console.log(response);
    return response;
  }

}

export default AuthService;
