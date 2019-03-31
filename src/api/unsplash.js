import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 27bbdeb27e28f1f4c44ca811964789728817a43f69941f0dbb13f5ee248c73d4"
  }
});
