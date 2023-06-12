import './App.scss';
import React, { useState } from 'react';
import Headers from './components/header/header';
// import About from './components/about/about';
// import DayNightToggle from './components/day-night-toggle/dayNightToggle';
// import Skills from './components/skills/skills';
// import WorkExperience from './components/work-experience/workExperience';
// import Projects from './components/projects/projects';
// import Navigation from './components/navigation/navigation';
// import Contacts from './components/contacts/contacts';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';
import { scrollToTop } from './utils';

function App() {
  const [toggleValue, setToggleValue] = useState(false);

  const changeDayNightClassInCaseOfSafariBrowser = window.safari !== undefined ? 'safari' : '';

  return (
    <React.Fragment>
      <div className="header-container">
        <Headers toggleValue={toggleValue} class={changeDayNightClassInCaseOfSafariBrowser} />
        <div className="toggler-container">
          {/* <DayNightToggle setToggleValue={setToggleValue} /> */}
        </div>
        <main className='outlet-height'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
