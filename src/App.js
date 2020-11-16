import "./App.css";
import Analog from "./Components/Analog";
import Clock from "./Components/Clock";

const tzDict = {
  Us: {
    country: "en-US",
    tz: { timeZone: "America/New_York" },
  },
  Fi: {
    country: "en-US",
    tz: { timeZone: "Europe/Istanbul" },
  },
  Am: {
    country: "en-Us",
    tz: { timeZone: "Europe/London" },
  },
};

function App() {
  return (
    <div>
      <Clock id="fi" country={tzDict.Fi.country} timeZone={tzDict.Fi.tz} />
      <Clock id="us" country={tzDict.Us.country} timeZone={tzDict.Us.tz} />
      <Clock id="am" country={tzDict.Am.country} timeZone={tzDict.Am.tz} />
    </div>
  );
}

export default App;
