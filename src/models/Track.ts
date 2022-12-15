export interface IArtist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ITrack {
  name?: string;
  album?: string;
  artists?: IArtist[];
  duration_ms?: number;
}

export interface ITrackState {
  track: ITrack;
}
