import './header.scss';
import React from 'react';
import logo from '../../assets/images/logo.png';

function Headers(props) {

    return (
        <header className={"header " + (props.toggleValue ? 'night' : 'day')}>
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">
                        Hi! I'm Ravi Raj Singh
                    </span>
                    <span className="heading-primary-sub">
                        Frontend Engineer with 2+ years of experince.
                    </span>
                    <span className="heading-primary-sub" style={{marginTop: 20 + 'px'}}>
                        JavaScript | Angular | React
                    </span>
                </h1>

                <a href="#" className="btn btn-white btn-animated">Let's Start</a>
            </div>
        </header>
    );
}

export default Headers;