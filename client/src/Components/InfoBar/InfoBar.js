import React from 'react';
import './InfoBar.css';
import online from '../../Icon/onlineIcon.png';

const InfoBar = ({room , settoggler}) => (
    <div className="outercontainer">
        <div className="leftinnercontainer">
            <div className="burger">
                <i className="fa fa-bars" onClick = {settoggler}></i>
            </div>

            <img src={online} alt="online"></img>
            <h3>{room}</h3>
        </div>
        <div className="rightinnercontainer">
            <a href="/"><i className="fa fa-window-close"/></a>
            
        </div>
    </div>
)

export default InfoBar;