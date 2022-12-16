import { useReducer } from "react";
import axios from "axios";
import { TrackContext } from "./TrackContext";
import { TrackReducer } from "./TrackReducer";

const INITIAL_STATE = {
  tracks: [],
  selectedTrack: {},
  artists: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function TrackProvider({ children }: Props) {
  const [state, dispatch] = useReducer(TrackReducer, INITIAL_STATE);

  const searchTracks = async (name: string, token: string) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=${name}&type=track&limit=3`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

  const getTrack = async (id: string, token: string) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/tracks/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

  const getArtists = async (ids: string, token: string) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/artists?ids=${ids}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

  return (
    <TrackContext.Provider
      value={{ state, searchTracks, getTrack, getArtists }}
    >
      {children}
    </TrackContext.Provider>
  );
}
