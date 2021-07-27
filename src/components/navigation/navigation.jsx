import React, { useState } from "react";
import "./navigation.scss";

function Navigation(props) {

    const [menuChecked, setmenuChecked] = useState(false);

    const setChecked = () => setmenuChecked(false);

    const handleCheckboxChange = () => setmenuChecked(!menuChecked);
    
    return(
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" checked={menuChecked} onChange={handleCheckboxChange} id="navi__toggle" />

            <label htmlFor="navi__toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className={"navigation__background " + (props.toggleValue ? 'night' : 'day')}>&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#home" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={setChecked}><span>01</span>Home</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#about" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={setChecked}><span>02</span>About Me</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#skills" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={setChecked}><span>03</span>Skills</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#work-experience" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={setChecked}><span>04</span>Work Experience</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#projects" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={setChecked}><span>05</span>Projects</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#contacts" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={setChecked}><span>06</span>Contacts</a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navigation;