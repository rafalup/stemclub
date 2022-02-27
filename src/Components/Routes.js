import React, {Component} from 'react';
import {
    Route, Switch
} from 'react-router-dom';


import Home from './../Pages/Home';
import About from './../Pages/About';



export class Routes extends Component {
    render() {
        return (
            <main className="container">
            <Switch>
                <Route component={Home} exact path='/' />
                <Route component={About} exact path='/About' />
                
            </Switch>
            </main>
        )
    }
};

export default Routes;