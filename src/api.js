import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export default {
  getHomeList: async () => {
    let { data: json } = await api.get(`posts`);
    return json;
  },

  getSinglePost: async (id) => {
    let { data: json } = await api.get(`post/${id}`);
    return json;
  },

  getRatingPosts: async (id) => {
    let { data: json } = await api.get(`post/rating/${id}`);
    return json;
  },

  setNewValue: async (value, id) => {
    let body = new FormData();
    body.append("value", value);
    body.append("id", id);

    let { data: json } = await api.post(`rating/post`, body);
    return json;
  },

  addComentary: async (content, id) => {
    let body = new FormData();
    body.append("content", content);
    body.append("id", id);

    let { data: json } = await api.post(`/comment/post`, body);
    return json;
  },
};

