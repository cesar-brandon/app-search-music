import "./App.scss";
import "./style/main.scss";

import { Background, CardMusic, Login } from "./components/layout";
import TrackProvider from "./context/Track/TrackProvider";
import ThemeProvider from "./context/Theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TrackProvider>
          <Login />
          <Background />
          <CardMusic />
        </TrackProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
