import './dayNightToggle.scss';
import React from 'react';

function DayNightToggle(props) {

    const handleToggleChange = (event) => {
        props.setToggleValue(event.target.checked);
    }

    return (
        <label className='day-night-toggle'>
            <input className='toggle-checkbox' type='checkbox' onClick={handleToggleChange}></input>
            <div className='toggle-slot'>   
                <div className='sun-icon-wrapper'>
                    <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
                <div className='toggle-button'></div>
                <div className='moon-icon-wrapper'>
                    <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
            </div>
        </label>

    );
}


export default DayNightToggle;