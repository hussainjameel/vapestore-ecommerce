import jwtDecode from "jwt-decode";
import GenericService from "./GenericService";

class UserService extends GenericService {
  constructor(props) {
    super();
  }

  login = (email, password) => {
    return new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          console.log(token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  register = (name, email, password) => {
    this.post("users/register", { name, email, password });
  };

  logout = () => {
    localStorage.removeItem("token");
  };

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };

  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "admin") return true;
      else return false;
    } else return false;
  };

  isUser = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "user") return true;
      else return false;
    } else return false;
  };
}

let userService = new UserService();

export default userService;
