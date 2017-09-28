import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default function Projects(props) {

    return (
        <div>
            <h1>Projects</h1>
            <NavLink activeClassName='active' to='/projects/dogs'>Woof Woof</NavLink>
            <NavLink activeClassName='active' to='/projects/money'>Dolla Bills</NavLink>
            {props.children}
        </div>
    )
}

