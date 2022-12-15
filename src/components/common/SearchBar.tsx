import { useContext, useState } from "react";
import { TrackContext } from "../../context/Track/TrackContext";
import getAccessToken from "../../utils/getAccessToken";

export default function SearchBar() {
  const { searchTrack } = useContext(TrackContext);
  const [searchContent, setSearchContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // searchTrack(searchContent);
    getAccessToken().then((token) => {
      searchTrack(searchContent, token);
    });
  };

  return (
    <div className="search__bar">
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchContent}
          onChange={handleChange}
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
    </div>
  );
}
