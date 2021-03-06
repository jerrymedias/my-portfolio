import './header.scss';
import React from 'react';

function Headers(props) {

    return (
        <header className={"header " + (props.toggleValue ? 'night' : 'day') + props.class} id="home">
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">
                        Hi! I'm Ravi Raj Singh
                    </span>
                    <span className="heading-primary-sub">
                        A Frontend Engineer with 2+ years of experince
                    </span>
                    <span className="heading-primary-sub" style={{marginTop: 20 + 'px'}}>
                        JavaScript | Angular | React
                    </span>
                </h1>

                <a href="#about" className="btn btn-white btn-animated">Go to about</a>
            </div>
        </header>
    );

}

export default Headers;