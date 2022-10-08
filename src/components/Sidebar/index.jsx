import {Link, NavLink} from "react-router-dom"
import {useState} from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-c.png'
import LogoSubtitle from '../../assets/images/logo_subCak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{
    faGithub, faLinkedin, faYoutube, faSkype,
} from '@fortawesome/free-brands-svg-icons'
import{
    faHome, faUser, faEnvelope, faSuitcase, faBars, faClose,
} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="Logo" />
                <img classNam="sub-logo" src={LogoSubtitle} alt="Slobodan" />
            </Link>
    
            <nav className={showNav? 'mobile-show' : ''}>
                <NavLink 
                    exact = "true" 
                    activeClassName="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="portofolio-link"
                    to="/portofolio"
                    onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon' />
            </nav>

            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/m-naufal-badruttamam-526635217/"
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/Caknoooo"
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>

                <li>
                    <a href="#"
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>

                <li>
                    <a href="#"
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
            </ul>

            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default Sidebar