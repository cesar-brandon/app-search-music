import { useReducer } from "react";
import axios from "axios";
import { TrackContext } from "./TrackContext";
import { TrackReducer } from "./TrackReducer";
import { access_token } from "../../api/credentials";

const INITIAL_STATE = {
  track: {},
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function TrackProvider({ children }: Props) {
  const [state, dispatch] = useReducer(TrackReducer, INITIAL_STATE);

  const headersParams = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      contentType: "application/json",
    },
  };

  const searchTrack = async (name: string, token: string) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=${name}&type=track&limit=1`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: "SEARCH_TRACK",
        payload: data.tracks.items[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const playTrack = async (id: string) => {
    try {
      await axios.put(`https://api.spotify.com/v1/me/player/play`, {
        headersParams,
        data: {
          context_uri: `spotify:album:${id}`,
        },
        offset: {
          position: 5,
        },
        postion_ms: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const nextTrack = async () => {
    try {
      await axios.post(`https://api.spotify.com/v1/me/player/next`, {
        headersParams,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TrackContext.Provider value={{ state, searchTrack, playTrack, nextTrack }}>
      {children}
    </TrackContext.Provider>
  );
}
