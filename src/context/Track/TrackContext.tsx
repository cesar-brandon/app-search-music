import { createContext } from "react";
import { ITrackState } from "../../models/Track";

export type ITrackContextProps = {
  state: ITrackState;
  searchTrack: (name: string, token: string) => void;
  playTrack: (id: string) => void;
  nextTrack: () => void;
};

export const TrackContext = createContext<ITrackContextProps>(
  {} as ITrackContextProps
);
