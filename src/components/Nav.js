import React from "react";
import yoga from '../assets/menu-1.JPG';
import swimming from '../assets/menu-2.JPG';
import running from '../assets/menu-3.JPG';
import weight from '../assets/menu-4.JPG';
import '../styles/Nav.css'



class Nav extends React.Component{
    /**
     * @return {JSX.Element}
     */
    render() {
        return(
            <nav>
                <div className="nav-flex">
                    <div className='nav-img' alt={yoga}><img path="/user" title="User Link" src={yoga} /></div>
                    <div className='nav-img' alt={swimming}><img path="/user" title="User Link" src={swimming} /></div>
                    <div className='nav-img' alt={running}><img path="/user" title="User Link" src={running} /></div>
                    <div className='nav-img' alt={weight}><img path="/user" title="User Link" src={weight} /></div>
                    <div className='copyright'>Copyright, SportSee 2020</div>
                </div>
            </nav>
        )
    }
}

export default Nav