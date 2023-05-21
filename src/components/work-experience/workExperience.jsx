import React from "react";
import "./workExperience.scss";
import sapientLogo from "../../assets/images/Publicis-Sapient-Logo.png";
import oodlesLogo from "../../assets/images/oodles-logo.png";
import tata1mgLogo from "../../assets/images/tata-1mg.png";

function WorkExperience(props) {
    return (
        <section className="section-experience" id="work-experience">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className={"heading-secondary " + (props.toggleValue ? 'night' : 'day')}>
                    My Work Experience
                </h2>
            </div>
            
            <div className="row">
                <div className="col-1-of-3">
                    <div className="workbox">
                        <div className={"workbox__side workbox__side--front " + (props.toggleValue ? "workbox__side--front--night" : "workbox__side--front--day" )}>
                            <img className="logo" src={tata1mgLogo} alt="Sapient__logo" />
                            <div className="role">
                                <span className="role-address-time role-heading">Role</span>
                                <span className="role-address-time">Software Development Engineer II</span>
                                <span className="role-address-time">May 2022 - Present</span>
                                <span className="role-address-time">Gurugram, India</span>
                                <span className="role-address-time">Hover to see my responsibilities</span>
                            </div>
                        </div>
                        <div className="workbox__side workbox__side--back workbox__side--back--1">
                            <p className="paragraph">
                                - Revapmed checkout flow completely for Mweb and webview, which was from cart page to order success page using our DLS<br />
                                - One of the core member of our Design Language System team.<br />
                                - Launching new flows and initiatives to increase engagement on Health Record using React.<br/>
                                - Completely owning the client side of HEALTH RECORDS in 1mg, currently it is running in BETA version for Mweb<br/>
                                {/* - Building dashboards for automating internal business operations using React.<br/> */}
                                - Tech stack - HTML, CSS, Sass, JavaScript, TypeScript, React, Redux, PWA, SSR, node.js. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="workbox">
                        <div className={"workbox__side workbox__side--front " + (props.toggleValue ? "workbox__side--front--night" : "workbox__side--front--day" )}>
                            <img className="logo" src={sapientLogo} alt="Sapient__logo" />
                            <div className="role">
                                <span className="role-address-time role-heading">Role</span>
                                <span className="role-address-time">Associate Technology Level II</span>
                                <span className="role-address-time">June 2021 - May 2022</span>
                                <span className="role-address-time">Gurugram, India</span>
                                <span className="role-address-time">Hover to see my responsibilities</span>
                            </div>
                        </div>
                        <div className="workbox__side workbox__side--back workbox__side--back--2">
                            <p className="paragraph">
                                - Got to work on Traffic managment applications. Followed the code standard set on sonarqube.<br/>
                                - Single handly completed the third phase of the application.<br/>
                                - Build a prototype of a graph running on every seconds to plot junctions traffic lights running,
                                Successfully implemented it in the project with WebSocket connection in order to plot traffic signals
                                running on Junctions continously.<br/>
                                - Tech stack - HTML, CSS, Sass, JavaScript, Typescript, Angular 6. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="workbox">
                        <div className={"workbox__side workbox__side--front " + (props.toggleValue ? "workbox__side--front--night" : "workbox__side--front--day" )}>
                            <img className="logo border" src={oodlesLogo} alt="Oodles__logo" />
                            <div className="role">
                                <span className="role-address-time role-heading">Role</span>
                                <span className="role-address-time">Associate Frontend Developer</span>
                                <span className="role-address-time">Feb 2020 - June 2021</span>
                                <span className="role-address-time">Gurugram, India</span>
                                <span className="role-address-time">Hover to see my responsibilities</span>
                            </div>
                        </div>
                        <div className="workbox__side workbox__side--back workbox__side--back--3">
                            <p className="paragraph">
                                - Got to work on ERP Technologies. Mentored Juniors and handled code review<br />
                                - Played a role of scrum master on daily standups and delegated tasks to the team. Led a team 3-4 Junior developers.<br/>
                                - Collaborated with the business, other engineering team to develop successful end to end features.<br/>
                                - Implemented Lazy loading in 600+ components application running from 3+ years and improved the performance of the app.
                                app.bundle size was decreased to 2.8mb from 17.4mb and load time of application from 19 sec to 5 sec.<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;