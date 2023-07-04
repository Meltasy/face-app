import React from 'react';
import Tilt from 'react-parallax-tilt';
import lightbulb from './Lightbulb.png';
// <a href="https://www.flaticon.com/free-icons/idea" title="idea icons">Idea icons created by surang - Flaticon</a>
import './Logo.css';

const Logo = () => {
   return (
        <div style={{display: 'flex', justifyContent: 'center',}}>
            <Tilt
                className='parallax-effect-glare-scale'
                perspective='500'
                glareEnable='true'
                glareMaxOpacity='0.45'
                scale='1.02'
            >
                <div className='inner-element'>
                <div className='padding'>Who's who?</div>
                <div className='padding'><img height='75px' alt='logo' src={lightbulb}/></div>
                </div>
            </Tilt>
        </div>
   );
}

export default Logo;