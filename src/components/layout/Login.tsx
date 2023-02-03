import { useContext, useEffect, useState } from "react";
import { TrackContext } from "../../context/Track/TrackContext";
import { getAccessToken } from "../../utils/authorization";
import { Button } from "../common";

export default function Login() {
  const [open, setOpen] = useState("open");
  const { setToken } = useContext(TrackContext);
  //
  // const { setToken } = useContext(TrackContext);

  // useEffect(() => {
  //   if (window.location.hash) {
  //     setOpen(false);
  //     const { access_token, expires_in, token_type } =
  //       getReturnParamsFromSpotifyAuth(window.location.hash);
  //
  //     setToken(access_token);
  //
  //     localStorage.clear();
  //     localStorage.setItem("access_token", access_token);
  //     localStorage.setItem("expires_in", expires_in);
  //     localStorage.setItem("token_type", token_type);
  //   }
  // }, []);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    getAccessToken();
    setToken(localStorage.getItem("access_token") || "");
    if (localStorage.getItem("access_token")) {
      setOpen("");
    }
    // window.location.replace(getSpotifyAuthorizeUrl());
  };

  return (
    <>
      {open && (
        <div className="Login">
          <form className="Login__form">
            <h2>Generar token</h2>
            <span>
              Busca canciones ilimitadas, pero solo prodras reproducir un
              preview de 30s
            </span>
            <div className="ticket" onClick={handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
