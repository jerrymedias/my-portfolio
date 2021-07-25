import './App.scss';
import React, { useState } from 'react';
import Headers from './components/header/header';
import About from './components/about/about';
import DayNightToggle from './components/day-night-toggle/dayNightToggle';
import Skills from './components/skills/skills';

function App() {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <React.Fragment>
      <div className="header-container">
        <Headers toggleValue={toggleValue} />
        <div className="toggler-container">
          <DayNightToggle setToggleValue={setToggleValue}/>
        </div>
        <main>
          <About toggleValue={toggleValue} />
          <Skills toggleValue={toggleValue} />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
