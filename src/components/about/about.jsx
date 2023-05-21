import React from "react";
import './about.scss';
import myself1 from "../../assets/images/myself1.jpg";
import myself2 from "../../assets/images/myself2.jpg";
import myself3 from "../../assets/images/myself3.jpg";

function About(props) {
    return(
            <section className="section-about" id="about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className={"heading-secondary " + (props.toggleValue ? 'night' : 'day')}>
                        Exciting things about me
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h2 className="heading-tertiary u-margin-bottom-small">I'm sure you were curious to know about me</h2>
                        <p className="paragraph">
                            I have 3+ years of experience in building web 
                            applications, currently helping TATA 1mg to provide best user experience to 250+ millions users with all the latest technologies and methods.
                            I have worked both in 
                            startups and big MNC's.
                            <br/>
                            <br/>I started as a Software Engineer
                            who only knew python as a Programming language and then guess what I got an opportunity to work on client side of an app which 
                            was using Angular 5+ and then after year or so moved on to React applications but soon I realised that JavaScript is something which matters most
                            and started learning it's behind the scene in depth and still diving deep and playing around with it everyday.
                        </p>
                        <h2 className="heading-tertiary u-margin-bottom-small">Some of my Interests</h2>
                        <p className="paragraph">
                            I love to talk about tech, sports and also love to learn and implement new technologies.<br/>
                            If that interests you let's connect on <a href="https://www.linkedin.com/in/ngraj" target="_blank" className="link">Linkedin</a>
                        </p>
                        <a href="#skills" className={"btn-text " + (props.toggleValue ? 'night-btn' : 'day-btn')}>See my skills &darr;</a>
                    </div>
                    <div className="col-1-of-2">
                    <div className="composition">
                        <img src={myself1} alt="Photo 1" className={(props.toggleValue ? 'mode-night ' : 'mode-day ') + "composition__photo composition__photo--p1"} />
                        <img src={myself3} alt="Photo 2" className={(props.toggleValue ? 'mode-night ' : 'mode-day ') + "composition__photo composition__photo--p2"} />
                        <img src={myself2} alt="Photo 3" className={(props.toggleValue ? 'mode-night ' : 'mode-day ') + "composition__photo composition__photo--p3"} />
                    </div>
                    </div>
                </div>
            </section>
    );
}

export default About;