import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/images/bunny-logo.png";
import { viewTransitionAPI } from "../../utils";

function Footer() {
    const navigate = useNavigate();

    return(
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="Full Logo" className="footer__logo" />
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#home" className="footer__link" onClick={(event) => {
                                viewTransitionAPI(navigate, "/home", event)
                            }}>Home</a></li>
                            <li className="footer__item"><a href="#about" className="footer__link" onClick={(event) => {
                                viewTransitionAPI(navigate, "/about", event)
                            }}>About</a></li>
                            <li className="footer__item"><a href="#skills" className="footer__link" onClick={(event) => {
                                viewTransitionAPI(navigate, "/skills", event)
                            }}>Skills</a></li>
                            <li className="footer__item"><a href="#work-experience" className="footer__link" onClick={(event) => {
                                viewTransitionAPI(navigate, "/experience", event)
                            }}>Work</a></li>
                            <li className="footer__item"><a href="#projects" className="footer__link" onClick={(event) => {
                                viewTransitionAPI(navigate, "/projects", event)
                            }}>Projects</a></li>
                            <li className="footer__item"><a href="#contacts" className="footer__link" onClick={(event) => {
                                viewTransitionAPI(navigate, "/contacts", event)
                            }}>Contacts</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <span className="footer__linkname">Ravi Raj Singh</span> for his portfolio using React and Sass. Copyright 
                        &copy; by Ravi Raj Singh. Major credit to  <span className="footer__linkname">Jonas </span> for such a fantastic Sass course which encouraged me to 
                        to make this flawless portfolio.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;