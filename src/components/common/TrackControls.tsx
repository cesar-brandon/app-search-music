import { useContext, useState } from "react";
import { TrackContext } from "../../context/Track/TrackContext";

export default function TrackControls() {
  const {
    state: { track },
  } = useContext(TrackContext);
  const [play, setPlay] = useState(true);

  const togglePlay = () => {
    play ? setPlay(false) : setPlay(true);
  };

  const calculateTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${secondsString}`;
  };

  const { duration_ms } = track;

  return (
    <div className="Controls">
      <div className="Controls__slide">
        <div className="bar"></div>
        <div className="duration">
          {duration_ms ? calculateTime(duration_ms / 1000) : "0:00"}
        </div>
      </div>
      <div className="Controls__play" onClick={togglePlay}>
        {play ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
