import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import imgIconFacebook from './img/imgIcon/imgIconFacebook';
import imgIconInstagram from '.img/imgIcon/imgIconInstagram.png';
import imgIconLinkedin from '.img/imgIcon/imgIconLinkedin.png';
import imgIconTwitter from '.img/imgIcon/imgIconTwitter.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <ul className="redSocialIcon">
                    
                    <li><Linkrouter className="redSocialIconLi" to="//es-la.facebook.com/" target="_blank">
                        <img src={imgIconFacebook} width="30px" alt="facebook"/></Linkrouter></li>
                    
                    <li><Linkrouter className="redSocialIconLi" to="//www.instagram.com/" target="_blank">
                        <img src={imgIconInstagram} width="30px" alt="instagram"/></Linkrouter></li>
                   
                    <li><Linkrouter className="redSocialIconLi" to="//twitter.com/?lang=es" target="_blank">
                        <img src={imgIconTwitter} width="30px" alt="twitter"/></Linkrouter></li>
                        
                    
                    <li><Linkrouter className="redSocialIconLi" to="//ar.linkedin.com/" target="_blank">
                        <img src={imgIconLinkedin} width="30px" alt="linkedin"/></Linkrouter></li>
                        
                </ul>
                
                <h6 className="footerText">All Rights Reserved Copyright - 2022 | <i>powered by claudiodmguzman</i> </h6>
            </div>
        </footer>
    )
}

export default Footer;