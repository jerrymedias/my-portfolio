import React from "react";
import "./contacts.scss";
import linkedinLogo from "../../assets/images/linkedin.png";
import githubLogo from "../../assets/images/Github.jpg";
import facebookLogo from "../../assets/images/fb.png";
import instaLogo from "../../assets/images/insta.png";

function Contacts(props) {

    const openMySocialMedia = (media) => {
        let link = '';
        switch (media) {
            case 'linkedin':
                link = 'https://www.linkedin.com/in/ngraj';
                break;
            
            case 'github':
                link = 'https://github.com/jerrymedias';
                break;
            
            case 'insta':
                link = 'https://www.instagram.com/mr.perfectrajput/';
                break;

            default:
                link = 'https://www.facebook.com/raviraj.singh.125';
                break
        }

        window.open(link, '_blank');
    }

    return(
        <section className={"section-contacts " + (props.toggleValue ? 'night-contact' : 'day-contact')} id="contacts">
            <div className="row whole-area">
                <div className="col1-of-2-no-gutter">
                    <div className="contact-area">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className={"heading-secondary " + (props.toggleValue ? 'night' : 'day')}>
                                Contacts
                            </h2>

                            <div className="row">
                                <div className="col-1-of-2">
                                    <img src={linkedinLogo} alt="logo" className="contact-logo" onClick={() => openMySocialMedia('linkedin')}/>
                                </div>
                                <div className="col-1-of-2">
                                    <img src={githubLogo} alt="logo" className="contact-logo" onClick={() => openMySocialMedia('github')}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1-of-2">
                                    <img src={instaLogo} alt="logo" className="contact-logo" onClick={() => openMySocialMedia('insta')}/>
                                </div>
                                <div className="col-1-of-2">
                                    <img src={facebookLogo} alt="logo" className="contact-logo" onClick={() => openMySocialMedia('facebook')}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="number-mail">
                                    <span className="label">Mobile No. : </span>
                                    <span className="label-value">+919193326895</span>
                                </div>

                                <div className="number-mail">
                                    <span className="label">Email : </span>
                                    <span className="label-value">jerrymedia007@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col1-of-2-no-gutter">
                    <div className="pic-area"></div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;