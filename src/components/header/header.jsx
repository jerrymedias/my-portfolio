import './header.scss';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { viewTransitionAPI } from '../../utils';
import DayNightToggle from '../day-night-toggle/dayNightToggle';
import Navigation from '../navigation/navigation';

function Headers(props) {
    const navigate = useNavigate();
    const [toggleValue, setToggleValue] = React.useState(false);

    return (
        <header className={"no-transition header " + (props.toggleValue ? 'night' : 'header_main') + props.class} id="home">
            {/* <DayNightToggle /> */}
            <nav className='nav'>
                {["Home", "About", "Projects", "Experience", "Contacts"].map((ele) => {
                    return (
                        <div className='nav_link' key={ele}
                            onClick={(event) => {
                                viewTransitionAPI(navigate, `/${ele.toLowerCase()}`, event)
                            }}
                        >{ele}</div>
                    )
                })}
            </nav>
            <Navigation toggleValue={toggleValue} />
        </header>
    );

}

export default Headers;