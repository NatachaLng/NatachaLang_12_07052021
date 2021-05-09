import React from "react";
import yoga from '../assets/yoga.JPG';
import swimming from '../assets/swimming.JPG';
import running from '../assets/running.JPG';
import weight from '../assets/weight.JPG';
import '../styles/Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-flex">
                    <div className='nav-img' alt={yoga}><img path="/user" title="User Link" src={yoga}/></div>
                    <div className='nav-img' alt={swimming}><img path="/user" title="User Link" src={swimming}/></div>
                    <div className='nav-img' alt={running}><img path="/user" title="User Link" src={running}/></div>
                    <div className='nav-img' alt={weight}><img path="/user" title="User Link" src={weight}/></div>
                    <div className='copyright'>Copyright, SportSee 2020</div>
                </div>
            </nav>
        )
    }
}

export default Nav