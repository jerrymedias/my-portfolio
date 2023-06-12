import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { viewTransitionAPI } from "../../utils"
import "./navigation.scss";

function Navigation(props) {

    const [menuChecked, setmenuChecked] = useState(false);

    const setChecked = () => setmenuChecked(false);

    const handleCheckboxChange = () => setmenuChecked(!menuChecked);
    const navigate = useNavigate();

    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" checked={menuChecked} onChange={handleCheckboxChange} id="navi__toggle" />

            <label htmlFor="navi__toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className={"navigation__background " + (props.toggleValue ? 'night' : 'day')}>&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={(event) => {
                            setChecked()
                            viewTransitionAPI(navigate, "/home", event)

                        }}><span>01</span>Home</a>
                    </li>
                    <li className="navigation__item">
                        <a href="" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={(event) => {
                            setChecked()
                            viewTransitionAPI(navigate, "/about", event)
                        }}><span>02</span>About Me</a>
                    </li>
                    <li className="navigation__item">
                        <a href="" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={(event) => {
                            setChecked()
                            viewTransitionAPI(navigate, "/skills", event)
                        }}><span>03</span>Skills</a>
                    </li>
                    <li className="navigation__item">
                        <a href="" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={(event) => {
                            setChecked()
                            viewTransitionAPI(navigate, "/experience", event)
                        }}><span>04</span>Work Experience</a>
                    </li>
                    <li className="navigation__item">
                        <a href="" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={(event) => {
                            setChecked()
                            viewTransitionAPI(navigate, "/projects", event)
                        }}><span>05</span>Projects</a>
                    </li>
                    <li className="navigation__item">
                        <a href="" className={"navigation__link " + (props.toggleValue ? 'night-link' : 'day-link')} onClick={(event) => {
                            setChecked()
                            viewTransitionAPI(navigate, "/contacts", event)
                        }}><span>06</span>Contacts</a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navigation;