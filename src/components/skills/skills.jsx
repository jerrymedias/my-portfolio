import React from "react";
import "./skills.scss";
import js from "../../assets/images/js.png";
import htmlCss from "../../assets/images/html-css.png";
import angularNgrx from "../../assets/images/angular-ngrx.png";
import react from "../../assets/images/react.png"


function Skills(props) {
    return (
        <section className={"section-skills " + (props.toggleValue ? 'night-mode' : 'day-mode')} id="skills">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">My Major Skills</h2>
            </div>
            <div className="row">
                <div className="col-1-of-4">
                    <div className="skill-box">
                        <img className="skill-logo" src={htmlCss} alt="HTML-LOGO" />
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="skill-box">
                        <img className="skill-logo" src={js} alt="JS-LOGO" />
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="skill-box">
                        <img className="skill-logo" src={angularNgrx} alt="ANGULAR-LOGO" />
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="skill-box">
                        <img className="skill-logo" src={react} alt="REACT-LOGO" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;