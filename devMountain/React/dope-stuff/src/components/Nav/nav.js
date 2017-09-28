import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div> 
                <ul>
                    <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName='active' to='/bio'>Bio</NavLink></li>
                    <li><NavLink activeClassName='active' to='/projects'>Projects</NavLink></li>
                    </ul>
                <h1>Nav</h1>
                </div>
        )
    }
}

export default Nav;