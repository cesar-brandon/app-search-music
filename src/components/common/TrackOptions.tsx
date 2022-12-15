import TrackAditionals from "./TrackAditionals";
import TrackControls from "./TrackControls";
import TrackInfo from "./TrackInfo";

export default function TrackOptions() {
  return (
    <div className="TrackOptions">
      <TrackInfo />
      <TrackControls />
      <TrackAditionals />
    </div>
  );
}
