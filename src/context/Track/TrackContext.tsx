import { createContext } from "react";
import { ITrackState } from "../../models/Track";

export type ITrackContextProps = {
  state: ITrackState;
  searchTracks: (name: string) => void;
  getTrack: (id: string) => void;
  getArtists: (id: string) => void;
  playTrack: (uri: string) => void;
  setToken: (token: string) => void;
  setCode: (token: string) => void;
  setAudio: (audio: HTMLAudioElement) => void;
};

export const TrackContext = createContext<ITrackContextProps>(
  {} as ITrackContextProps
);
