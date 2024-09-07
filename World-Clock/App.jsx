// App.jsx

import DigitalClock from "./DigitalClock.jsx";


function App() {
  return (
    <div className="app-container">
      <h1 className="header">World Clock</h1>
      <div className="clocks">
        <DigitalClock timezone="Asia/Kolkata" city="Mumbai" />
        <DigitalClock timezone="America/Los_Angeles" city="San Francisco" />
        <DigitalClock timezone="Asia/Dubai" city="Dubai" />
        <DigitalClock timezone="Europe/Moscow" city="Moscow" />
        <DigitalClock timezone="Australia/Sydney" city="Sydney" />
        <DigitalClock timezone="Europe/London" city="London" />
        <DigitalClock timezone="Europe/Paris" city="Paris" />
        <DigitalClock timezone="Europe/Berlin" city="Berlin" />
        <DigitalClock timezone="Asia/Tokyo" city="Tokyo" />
      </div>
    </div>
  );
}

export default App;
