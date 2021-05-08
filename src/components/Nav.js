import React from "react";
import menu1 from '../assets/menu-1.JPG';
import menu2 from '../assets/menu-2.JPG';
import menu3 from '../assets/menu-3.JPG';
import menu4 from '../assets/menu-4.JPG';
import '../styles/Nav.css'

class Nav extends React.Component{
    render() {
        return(
            <nav>
                <div className="nav-flex">
                    <div className='nav-img'><img path="/user" title="User Link" src={menu1} /></div>
                    <div className='nav-img'><img path="/user" title="User Link" src={menu2} /></div>
                    <div className='nav-img'><img path="/user" title="User Link" src={menu3} /></div>
                    <div className='nav-img'><img path="/user" title="User Link" src={menu4} /></div>
                    <div className='copyright'>Copyright, SportSee 2020</div>
                </div>
            </nav>
        )
    }
}

export default Nav