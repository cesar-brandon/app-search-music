import { useReducer } from "react";
import axios from "axios";
import { TrackContext } from "./TrackContext";
import { TrackReducer } from "./TrackReducer";
import { ITrackState } from "../../models/Track";

const initialState: ITrackState = {
  tracks: [],
  selectedTrack: {},
  artists: [],
  codeVerifier: "",
  accessToken: "",
  preview: new Audio(),
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function TrackProvider({ children }: Props) {
  const [state, dispatch] = useReducer(TrackReducer, initialState);

  const searchTracks = async (name: string) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=${name}&type=track&limit=3`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.accessToken}`,
        },
      });

      dispatch({
        type: "SEARCH_TRACKS",
        payload: data.tracks.items,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTrack = async (id: string) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/tracks/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.accessToken}`,
        },
      });

      dispatch({
        type: "SELECT_TRACK",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getArtists = async (ids: string) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/artists?ids=${ids}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.accessToken}`,
        },
      });
      dispatch({
        type: "GET_ARTISTS",
        payload: data.artists,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const playTrack = async (uri: string) => {
    try {
      await axios.put(`https://api.spotify.com/v1/me/player/play`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.accessToken}`,
        },
        data: {
          context_uri: uri,
        },
        offset: {
          position: 5,
        },
        position_ms: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setCode = (code: string) => {
    dispatch({
      type: "SET_CODE",
      payload: code,
    });
  };
  const setToken = (token: string) => {
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
  };
  const setAudio = (audio: string) => {
    dispatch({
      type: "SET_AUDIO",
      payload: audio,
    });
  };

  return (
    <TrackContext.Provider
      value={{
        state,
        searchTracks,
        getTrack,
        getArtists,
        playTrack,
        setToken,
        setCode,
        setAudio,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
}
