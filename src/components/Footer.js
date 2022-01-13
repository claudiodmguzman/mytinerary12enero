import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import imgIconFacebook from './imgIconFacebook.png';
import imgIconInstagram from './imgIconInstagram.png';
import imgIconLinkedin from './imgIconLinkedin.png';
import imgIconTwitter from './imgIconTwitter.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <ul className="redSocialIcon">
                    
                    <li><Linkrouter className="redSocialIconLi" to="//https://es-la.facebook.com/" target="_blank">
                        <img src={imgIconFacebook.png} width="30px" alt="facebook"/></Linkrouter></li>
                    
                    <li><Linkrouter className="redSocialIconLi" to="//https://www.instagram.com/?hl=es-la" target="_blank">
                        <img src={imgIconInstagram.png} width="30px" alt="instagram"/></Linkrouter></li>
                   
                    <li><Linkrouter className="redSocialIconLi" to="//https://twitter.com/?lang=es" target="_blank">
                        <img src={imgIconTwitter.png} width="30px" alt="twitter"/></Linkrouter></li>
                        
                    
                    <li><Linkrouter className="redSocialIconLi" to="//https://ar.linkedin.com/" target="_blank">
                        <img src={imgIconLinkedin.png} width="30px" alt="linkedin"/></Linkrouter></li>
                        
                </ul>
                
                <h6 className="footerText">All Rights Reserved Copyright - 2022 | <i>powered by claudiodmguzman</i> </h6>
            </div>
        </footer>
    )
}

export default Footer;