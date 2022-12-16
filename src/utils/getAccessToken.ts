import { client_id, client_secret } from "../api/credentials";
import axios from "axios";

// getAccessToken
const getAccessToken = async () => {
  const response = await axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(client_id + ":" + client_secret),
    },
    data: "grant_type=client_credentials",
  });
  return response.data.access_token;
};

export default getAccessToken;
