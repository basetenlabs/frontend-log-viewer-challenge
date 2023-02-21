import { useState } from "react";
import "./App.css";
import TimePicker from "./Components/TimePicker";
import { TimeRange } from "./types";

function App() {
  const [range, setRange] = useState<TimeRange>(TimeRange.Last5Minutes);

  return (
    <div className="app">
      <div className="time-range-container">
        <TimePicker value={range} onChange={setRange} />
      </div>
      {/* Insert your log viewer implementation here */}
    </div>
  );
}

export default App;
