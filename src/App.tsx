import "./App.scss";
import "./style/main.scss";

import { CardMusic, Search } from "./components/layout";
import TrackProvider from "./context/Track/TrackProvider";
import { useEffect } from "react";
import ThemeProvider from "./context/Theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TrackProvider>
          <Search />
          <CardMusic />
        </TrackProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
