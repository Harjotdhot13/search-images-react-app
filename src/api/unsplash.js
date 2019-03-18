import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 954774441021bb79bfaee8ed4becc867ad3b2ebee49790ad288ccfe74c213583"
  }
});
