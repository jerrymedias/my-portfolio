import './App.scss';
import React, { useState } from 'react';
import Headers from './components/header/header';
import About from './components/about/about';
import DayNightToggle from './components/day-night-toggle/dayNightToggle';
import Skills from './components/skills/skills';
import WorkExperience from './components/work-experience/workExperience';
import Projects from './components/projects/projects';
import Navigation from './components/navigation/navigation';
import Contacts from './components/contacts/contacts';
import Footer from './components/footer/footer';

function App() {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <React.Fragment>
      <Navigation toggleValue={toggleValue}/>
      <div className="header-container">
        <Headers toggleValue={toggleValue} />
        <div className="toggler-container">
          <DayNightToggle setToggleValue={setToggleValue}/>
        </div>
        <main>
          <About toggleValue={toggleValue} />
          <Skills toggleValue={toggleValue} />
          <WorkExperience toggleValue={toggleValue} />
          <Projects toggleValue={toggleValue} />
          <Contacts toggleValue={toggleValue} />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
