import { ITrackState } from "../../models/Track";

type TrackAction =
  | { type: "SEARCH_TRACKS"; payload: [] }
  | { type: "SELECT_TRACK"; payload: {} }
  | { type: "GET_ARTISTS"; payload: [] };

export const TrackReducer = (state: ITrackState, action: TrackAction) => {
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
    default:
      return state;
  }
};
