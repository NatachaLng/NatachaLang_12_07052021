import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/Header.css'
import logo from '../assets/sportsee-logo.JPG'

/**
 * Header of the app
 */
class Header extends React.Component {
    /**
     * @return {JSX.Element}
     */
    render() {
        return (
            <header>
                <div className="main-header">
                    <NavLink to='/'><img src={logo} className="logo" alt="Sportsee"/></NavLink>
                        <NavLink to='/'>
                            <div className="navlink">
                                Accueil
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className="navlink">
                                Profil
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className="navlink">
                                Réglage
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className="navlink">
                                Communauté
                            </div>
                        </NavLink>
                </div>
            </header>
        );
    }
}

export default Header