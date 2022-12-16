import { useEffect, useState, useContext } from "react";
import { TrackContext } from "../../context/Track/TrackContext";
import { calculateAngle } from "../../utils/calculateAngle";
import { TrackControls, TrackInfo, TrackOptions } from "../common";

export default function CardMusic() {
  const [flip, setFlip] = useState("");
  const {
    state: { selectedTrack, artists },
  } = useContext(TrackContext);

  const { name, album } = selectedTrack;

  const trackImage = album?.images[0].url;

  const unFlip = () => {
    flip === "flipped" ? setFlip("") : setFlip("flipped");
  };

  useEffect(() => {
    document
      .querySelectorAll(".CardMusic")
      .forEach(function (item: Element | any) {
        item.addEventListener("mouseenter", function (e: Event) {
          calculateAngle(e, item.querySelector(".CardMusic__frontface"), item);
        });

        item.addEventListener("mousemove", function (e: Event) {
          calculateAngle(e, item.querySelector(".CardMusic__frontface"), item);
        });

        item.addEventListener("mouseleave", function (e: Event) {
          let dropShadowColor: string | null = `rgba(0, 0, 0, 0.3)`;
          if (item.getAttribute("data-filter-color") !== null) {
            dropShadowColor = item.getAttribute("data-filter-color");
          }
          item.classList.remove("animated");
          item.querySelector(
            ".CardMusic__frontface"
          ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
          item.querySelector(
            ".CardMusic__backface"
          ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
          item.querySelector(
            ".CardMusic__frontface"
          ).style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
        });
      });
  }, []);

  return (
    <div className="CardMusic__container">
      <div className={`CardMusic track ${flip}`}>
        <span className="CardMusic__backface">
          <span className="image">
            <div className="Artists">
              {artists?.map((artist) => (
                <img
                  key={artist.id}
                  src={artist?.images[0].url}
                  alt="artist-image"
                />
              ))}
            </div>
            <span className="unflip" onClick={() => unFlip()}>
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
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
            </span>
          </span>
        </span>
        <span className="CardMusic__frontface">
          {trackImage ? (
            <>
              <img
                className="track__image"
                src={trackImage}
                alt="track-image-front"
              />
              <span className="flip" onClick={() => unFlip()}>
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
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </span>
              <TrackOptions />
            </>
          ) : (
            <div className="CardMusic__frontface__init">
              <p>Busque su Cancion Favorita</p>
            </div>
          )}
          <span className="glare"></span>
        </span>
      </div>
    </div>
  );
}
