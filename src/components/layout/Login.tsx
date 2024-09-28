import { useContext, useState, useEffect } from "react";
import { TrackContext } from "../../context/Track/TrackContext";
import { getAccessToken } from "../../utils/authorization";

export default function Login() {
  const [open, setOpen] = useState(
    localStorage.getItem("access_token") ? "" : "open",
  );
  const [isPending, setIsPending] = useState(false);
  const { setToken } = useContext(TrackContext);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await getAccessToken();
      setToken(localStorage.getItem("access_token") ?? "");
      setOpen("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("access_token") ?? "");
  }, []);

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
            {isPending ? (
              <div className="ticket-load">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </div>
            ) : (
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
            )}
          </form>
        </div>
      )}
    </>
  );
}
