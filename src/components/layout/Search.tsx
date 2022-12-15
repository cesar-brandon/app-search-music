import { albumsImages, emojis, titles } from "../../utils/sliderData";
import { Date, SearchBar, Slider } from "../common";
import Header from "./Header";

export default function Search() {
  return (
    <div className="Search">
      <Header />
      <Slider data={emojis} />
      <Slider data={albumsImages} />
      <Slider data={titles} />
      <SearchBar />
    </div>
  );
}
