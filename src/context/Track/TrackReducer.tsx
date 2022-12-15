import { ITrackState } from "../../models/Track";

type TrackAction =
  | { type: "SEARCH_TRACK"; payload: {} }
  | { type: "PLAY_TRACK"; payload: {} };

export const TrackReducer = (state: ITrackState, action: TrackAction) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_TRACK":
      return {
        ...state,
        track: payload,
      };
    default:
      return state;
  }
};
