import React from "react";
import yoga from '../assets/yoga.JPG';
import swimming from '../assets/swimming.JPG';
import running from '../assets/cycling.JPG';
import weight from '../assets/training.JPG';
import '../styles/Nav.css'

class Nav extends React.Component{
    /**
     * Vertical Nav Bar
     * @return {JSX.Element}
     */
    render() {
        return(
            <nav>
                <div className="nav-flex">
                    <div className='nav-img'><img alt="" path="/user" title="User Link" src={yoga} /></div>
                    <div className='nav-img'><img alt="" path="/user" title="User Link" src={swimming} /></div>
                    <div className='nav-img'><img alt="" path="/user" title="User Link" src={running} /></div>
                    <div className='nav-img'><img alt="" path="/user" title="User Link" src={weight} /></div>
                    <div className='copyright'>Copyright, SportSee 2020</div>
                </div>
            </nav>
        )
    }
}

export default Nav