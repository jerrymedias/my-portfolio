import React from "react";
import "./projects.scss";
import atcsLogo from "../../assets/images/atcs-logo.jpg"
import kairos from "../../assets/images/kairos.jpg"
import CoverVideo from "../cover-video/coverVideo";
import coverVideoMp4 from "../../assets/video/video.mp4";
import coverVideoWebm from "../../assets/video/video.webm";

function Projects(props) {
    return(
        <section className="section-projects" id="projects">

            <CoverVideo video={{coverVideoMp4, coverVideoWebm}}/>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className={"heading-secondary " + (props.toggleValue ? 'night' : 'day')}>
                    My Projects
                </h2>
            </div>

            <div className="row">
                <div className="project u-margin-bottom-small">
                    <figure className="project__shape">
                        <img src={atcsLogo} alt="ATCS__LOGO" className="project__img"/>
                        <figcaption className="project__caption">ATCS</figcaption>
                    </figure>
                    <div className="project__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Adaptive traffic control system (REACT, REDUX, TYPESCRIPT, JAVASCRIPT, SCSS, WEBSOCKETS, WEBPACK, SPA)
                        </h3>

                        <p>
                            • Adaptive Traffic Control System (ATCS) is a robust web-based
                            application to configure, monitor, and control traffic junctions. It has a
                            robust API framework for seamless integration with any central
                            command and control applications.
                            • Integrated OpenStreet map to pin traffic junctions according to their
                            latitude a longitude on map.
                            • Implemented my own prototype of graph plotting live signals
                            running on traffic junction every second on each arm through
                            WebSocket.
                            • By WebSocket you can trigger different signals on any of the arms
                            on traffic junction as 
                        </p>
                    </div>
                </div>
            </div>

            <div className="row u-margin-bottom-small">
                <div className="project">
                    <figure className="project__shape">
                        <img src={kairos} alt="ATCS__LOGO" className="project__img"/>
                        <figcaption className="project__caption">Kairos Planning</figcaption>
                    </figure>
                    <div className="project__text">
                        <h3 className="heading-tertiary">
                            Kairos Planning (ANGULAR 9, TYPESCRIPT, JAVASCRIPT, HTML5, SCSS, WEBPACK, SPA)
                        </h3>

                        <p>
                           • Kairos Planning is an ERP application which is built on a global level in
                             order to plan future shifts of staff of any organization unit.
                           • An ERP application which was build on global level in order to plan future shifts of staff of any particular organizational unit. Global admin can add any numbers of country and mark a admin of it on default level, 
                            Country admin can add any number of organization and each organization manager can add their different unit running across the country 
                            and each unit manager can add different staff with their skills and expertise and staffs can plan their future shifts also can sell their shifts 
                            can calculate their pay etc. Different module views according to level of users only the global admin has access to all modules.
                            • Implemented Lazy loading in 800+ components and improved the
                            performance of the app. app.bundle size was decreased to 2.8mb
                            from 17.4mb and load time of application from 19 sec to 5 sec.
                        </p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="#contacts" className={"btn-text " + (props.toggleValue ? 'night-btn' : 'day-btn')}>Go to Contacts &darr;</a>
            </div>
        </section>
    );
}

export default Projects;
