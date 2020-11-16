import "./App.css";
import Analog from "./Components/Analog";
import Clock from "./Components/Clock";
import ClockWatcher from './Components/ClockWatcher.js';


const tzDict = {
  'Us': {
    country: 'en-US',
    tz: { timeZone: 'America/New_York' }
  },
  "Fi": {
    country: 'en-US',
    tz: { timeZone: 'Europe/Istanbul' }
  },
  "Am": {
    country: 'en-Us',
    tz: { timeZone: 'Europe/London'}
  }
}

function App() {
  return (
    <di>
      <Analog
        country= {tzDict.Am.country}
        timeZone= {tzDict.Am.tz}
      />
      <Clock 
        country= {tzDict.Fi.country}
        timeZone={tzDict.Fi.tz}/>
      <ClockWatcher
        country= {tzDict.Fi.country}
        timeZone={tzDict.Fi.tz}
      />
    </di>
  );
}

export default App;
