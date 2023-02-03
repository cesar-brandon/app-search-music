import { useContext, useEffect, useState } from "react";
import { TrackContext } from "../../context/Track/TrackContext";
import { ITrack } from "../../models/Track";

export default function SearchBar() {
  const {
    state: { tracks, selectedTrack },
    searchTracks,
    getTrack,
    getArtists,
  } = useContext(TrackContext);

  const [searchContent, setSearchContent] = useState("");
  const [separator, setSeparator] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSeparator(true);
    setSearchContent(e.target.value);
    searchTracks(searchContent);
  };

  const setTrack = (track: any) => {
    getTrack(track.id);
  };

  const setArtist = (artists: any) => {
    const ids = artists.map((artist: any) => artist.id).join(",");

    getArtists(ids);
  };

  const clearSearch = () => {
    setSeparator(false);
    setSearchContent("");
    tracks.length = 0;
  };

  return (
    <div className="search__bar">
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchContent}
          onChange={handleSubmit}
        />

        <button onClick={handleSubmit} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
      {separator && <span></span>}
      {tracks.length > 0 &&
        tracks.map((track, index) => (
          <div
            className="search__bar__track"
            key={index}
            onClick={() => {
              setTrack(track);
              setArtist(track.artists);
              clearSearch();
            }}
          >
            <img src={track?.album?.images[0].url} alt="track-image" />
            <div className="TrackInfo search">
              <h4>{track?.album?.name}</h4>
              <p>
                {track?.album?.artists.map((artist, index) => {
                  return index === track?.album?.artists.length - 1
                    ? artist.name
                    : artist.name + ", ";
                })}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
