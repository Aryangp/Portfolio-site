import React from 'react';
import "./index.scss";
import LogoS from "../../assets/images/logo-s2.png"
import LogoSubtitle from "../../assets/images/logo-sub2.png"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar=()=>{
    return(
    <div className="nav-bar">
    <Link className="logo" to="/">
        <img src={LogoS} alt="logo"></img>
        <img className="sub-logo" src={LogoSubtitle} alt="slobddon"></img>
    </Link>
    <nav>
        <NavLink exact="true"  activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true"  activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true"  activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>

    </nav>
    <ul className='social-link'>
        <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/aryan-gupta-4a345422b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMFn4CNk4Q8qLA2VrgbCoWA%3D%3D'>
                <FontAwesomeIcon icon={faLinkedin }/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/Aryangp'>
                <FontAwesomeIcon icon={faGithub }/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/aryangupta0510'>
                <FontAwesomeIcon icon={faInstagram }/>
            </a>
        </li>
     </ul>
    </div>)
}

export default Sidebar;