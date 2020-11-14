import "./App.css";
import Clock from "./Components/Analog";
import Analog from "./Components/Clock";
import ClockWatcher from './Components/ClockWatcher.js';


const tzDict = {
  'Us': {
    country: 'en-US',
    tz: { timeZone: 'America/New_York' }
  },
  "Fi": {
    country: 'en-US',
    tz: { timeZone: 'Europe/Istanbul' }
  }
}

function App() {
  return (
    <di>
      {/* <Clock /> */}
      <Clock 
        name="UK Time:"
        country= {tzDict.Fi.country}
        timeZone={tzDict.Fi.tz}/>
      {/* <ClockWatcher /> */}
      <Clock 
        name="UK Time:"
        country= {tzDict.Us.country}
        timeZone={tzDict.Us.tz}
      />
    </di>
  );
}

export default App;
