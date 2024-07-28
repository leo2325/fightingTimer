import React from 'react';
import BoxingTimer from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Header() {

    return (
        <div id="header">
            <div id="logo">
                <img src={BoxingTimer} alt="Logo" />
            </div>
            <div className='headerNav'>
                <div className='burgerNavIcon_container'>
                    <button className="controlButton">
                        <FontAwesomeIcon className="controls_icon" icon={faUser} />
                    </button>
                    <button className="controlButton">
                        <FontAwesomeIcon className="controls_icon" icon={faBars} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;