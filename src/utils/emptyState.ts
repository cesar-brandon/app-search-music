import { ITrack } from "../models/Track";

export const emptyTrack: ITrack = {
  album: {
    album_type: "",
    artists: [],
    available_markets: [],
    external_urls: {
      spotify: "",
    },
    href: "",
    id: "",
    images: [],
    name: "",
    release_date: "",
    release_date_precision: "",
    total_tracks: 0,
    type: "",
    uri: "",
  },
  artists: [],
  available_markets: [],
  disc_number: 0,
  duration_ms: 0,
  explicit: false,
  external_ids: {
    isrc: "",
  },
  external_urls: {
    spotify: "",
  },
  href: "",
  id: "",
  is_local: false,
  name: "",
  popularity: 0,
  preview_url: "",
  track_number: 0,
  type: "",
  uri: "",
};
