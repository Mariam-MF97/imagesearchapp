import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 42jzvUm15ES8h4nGj4rxiqBchr9oQz5YoglvSAZUNo0",
      },
});