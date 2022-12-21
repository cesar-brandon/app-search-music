import { ITrackState } from "../../models/Track";

type ITrackAction =
  | { type: "SEARCH_TRACKS"; payload: [] }
  | { type: "SELECT_TRACK"; payload: {} }
  | { type: "GET_ARTISTS"; payload: [] }
  | { type: "SET_TOKEN"; payload: string }
  | { type: "SET_CODE"; payload: string };

export const TrackReducer = (state: ITrackState, action: ITrackAction) => {
  const { type, payload } = action;

  switch (type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        tracks: payload,
      };
    case "SELECT_TRACK":
      return {
        ...state,
        selectedTrack: payload,
      };
    case "GET_ARTISTS":
      return {
        ...state,
        artists: payload,
      };
    case "SET_CODE":
      return {
        ...state,
        code: payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        accessToken: payload,
      };
    default:
      return state;
  }
};
