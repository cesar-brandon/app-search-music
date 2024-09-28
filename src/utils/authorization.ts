import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../api/credentials";

const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPACE_DEMILIMITER = "%20";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
];

export const getSpotifyAuthorizeUrl = () => {
  const scopes = SCOPES.join(SPACE_DEMILIMITER);
  return `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${scopes}`;
};

export const getReturnParamsFromSpotifyAuth = (hash: string) => {
  const stringAfterHashTag = hash.substring(1);
  const paramsInUrl = stringAfterHashTag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {} as { [key: string]: string });

  return paramsSplitUp;
};

// get access token from spotify
export const getAccessToken = async () => {
  const { data } = await axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    },
    data: "grant_type=client_credentials",
  });
  localStorage.setItem("access_token", data.access_token);

  return data.access_token;
};

export const isTokenExpired = () => {
  const currentTime = new Date().getTime() / 1000;
  return currentTime > 3600;
};
