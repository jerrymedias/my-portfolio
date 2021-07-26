import React from "react";
import "./projects.scss";
import atcsLogo from "../../assets/images/atcs-logo.jpg"
import kairos from "../../assets/images/kairos.jpg"
import CoverVideo from "../cover-video/coverVideo";
import coverVideoMp4 from "../../assets/video/video.mp4";
import coverVideoWebm from "../../assets/video/video.webm";

function Projects(props) {
    return(
        <section className="section-projects">

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
                            Adaptive traffic control system
                        </h3>

                        <p>
                            An application build to control traffic signal of a city. Intergrated Openstreet map to
                             pin Junctions according to their latitude an longitude and further configuration of the Junction where made 
                             like daily, weekly, monthly how the traffic signal will run and on any special days like on festivals 
                             and with WebSocket connenction you can trigger different signals on any of the Arms on Junction as per need like in case of any emergency occured on that particular Arm.
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
                            Kairos Planning
                        </h3>

                        <p>
                            An ERP application which was build on global level in order to plan future shifts of staff of any particular organizational unit. Global admin can add any numbers of country and mark a admin of it on default level, 
                            Country admin can add any number of organization and each organization manager can add their different unit running across the country 
                            and each unit manager can add different staff with their skills and expertise and staffs can plan their future shifts also can sell their shifts 
                            can calculate their pay etc. Different module views according to level of users only the global admin has access to all modules. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="#contact" className={"btn-text " + (props.toggleValue ? 'night-btn' : 'day-btn')}>Go to Contacts &rarr;</a>
            </div>
        </section>
    );
}

export default Projects;