import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2f75a81302d901f92b3d8bafa430b1107a3cb1901a1ce94bcc591e08ef729f45"
  }
});
