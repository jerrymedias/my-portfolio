import './App.scss';
import React, { useState } from 'react';
import Headers from './components/header/header';
import DayNightToggle from './components/day-night-toggle/dayNightToggle';

function App() {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <React.Fragment>
      <div className="header-container">
        <Headers toggleValue={toggleValue} />
        <div className="toggler-container">
          <DayNightToggle setToggleValue={ setToggleValue}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
