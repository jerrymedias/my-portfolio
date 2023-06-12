import React from 'react';
import { useNavigate } from "react-router-dom";
import './home.scss';
import { scrollToTop, viewTransitionAPI } from '../../utils';

function Home(props) {
    const navigate = useNavigate();
    // React.useEffect(() => {
    //     setTimeout(() => scrollToTop(), 400)
    // }, [])
    return (
        <header className={"home " + (props.toggleValue ? 'night ' : 'day ') + props.class} id="home">
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">
                        Hi! I'm Ravi Raj Singh
                    </span>
                    <span className="heading-primary-sub">
                        Frontend Engineer with 3+ years of experince
                    </span>
                    <span className="heading-primary-sub" style={{ marginTop: 20 + 'px' }}>
                        JavaScript | Angular | React
                    </span>
                </h1>

                <a href="" className="btn btn-white btn-animated" onClick={(event) => {
                    viewTransitionAPI(navigate, "/about", event, "full-embed")
                }}>Go to about</a>
            </div>
        </header>
    );

}

export default Home;