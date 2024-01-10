import React, { useState } from 'react';
import "./index.scss";
import LogoS from "../../assets/images/logo-s2.png"
import LogoSubtitle from "../../assets/images/logo-sub2.png"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faEye, faHome,faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar=()=>{
    const [showBar,setShowBar]=useState(false)
    return(
    <div className="nav-bar">
    <Link className="logo" to="/">
        <img src={LogoS} alt="logo"></img>
        <img className="sub-logo" src={LogoSubtitle} alt="slobddon"></img>
    </Link>
    <nav className={showBar ?"mobile-show":""}>
        <NavLink onClick={()=>setShowBar(false)} exact="true"  activeclassname="active" to="/">
            <FontAwesomeIcon  onClick={()=>setShowBar(false)} icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink onClick={()=>setShowBar(false)} exact="true"  activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon  onClick={()=>setShowBar(false)} icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink onClick={()=>setShowBar(false)} exact="true"  activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon  onClick={()=>setShowBar(false)} icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <NavLink onClick={()=>setShowBar(false)} exact="true"  activeclassname="active" className="skill-link" to="/skill">
            <FontAwesomeIcon  onClick={()=>setShowBar(false)} icon={faEye} color="#4d4d4e"/>
        </NavLink>
        <NavLink onClick={()=>setShowBar(false)} exact="true"  activeclassname="active" className="project-link" to="/project">
            <FontAwesomeIcon  onClick={()=>setShowBar(false)} icon={faSuitcase} color="#4d4d4e"/>
        </NavLink>
<FontAwesomeIcon icon={faClose} onClick={()=>setShowBar(false)} size="3x" color="#ffd700" className="close-icon"/>
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
     <FontAwesomeIcon onClick={()=>setShowBar(true)} icon={faBars} color="#ffd700" size="3x" className='hamburger-icon'/ >
    </div>)
}

export default Sidebar;