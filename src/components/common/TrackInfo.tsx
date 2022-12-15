import { useContext } from "react";
import { TrackContext } from "../../context/Track/TrackContext";

export default function TrackInfo() {
  const {
    state: { track },
  } = useContext(TrackContext);

  const { name, album, artists } = track;

  return (
    <div className="TrackInfo">
      <h4>{name}</h4>
      <p>
        {artists?.map((artist, index) => {
          return index === artists.length - 1
            ? artist.name
            : `${artist.name}, `;
        })}
      </p>
    </div>
  );
}
