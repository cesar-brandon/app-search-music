import { createContext } from "react";
import { ITrack, ITrackState } from "../../models/Track";

export type ITrackContextProps = {
  state: ITrackState;
  searchTracks: (name: string, token: string) => void;
  getTrack: (id: string, token: string) => void;
  getArtists: (id: string, token: string) => void;
};

export const TrackContext = createContext<ITrackContextProps>(
  {} as ITrackContextProps
);
