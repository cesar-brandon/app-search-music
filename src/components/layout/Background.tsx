import { useEffect } from "react";
import { getAccessToken } from "../../utils/authorization";
import { albumsImages, emojis, titles } from "../../utils/sliderData";
import { Date, SearchBar, Slider } from "../common";
import Header from "./Header";

export default function Background() {
  return (
    <div className="Background">
      <Header />
      <Slider data={emojis} />
      <Slider data={albumsImages} />
      <Slider data={titles} />
      <SearchBar />
    </div>
  );
}
