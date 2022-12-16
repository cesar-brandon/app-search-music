import { useContext } from "react";
import { TrackContext } from "../../context/Track/TrackContext";

interface Props {
  state: string;
}

export default function TrackInfo({ state }: Props) {
  const {
    state: { selectedTrack },
  } = useContext(TrackContext);

  const { name, album, artists } = selectedTrack;

  return (
    <div className={`TrackInfo ${state}`}>
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
