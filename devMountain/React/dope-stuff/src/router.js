import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home.js';
import Bio from './components/Bio/bio.js';
import Projects from './components/Projects/projects.js';
import Nav from './components/Nav/nav.js';
import Dogs from './components/Projects/Dogs/dogs.js';
import Money from './components/Projects/Money/money.js';



export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bio' component={Bio} />
        <Route path='/projects' render={() => {
            return (
                <Projects>
                    <Route path='/projects/dogs' component={Dogs} />
                    <Route path='/projects/money' component={Money} />
                </Projects>

            )
        }} />
    </Switch>
)