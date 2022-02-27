import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from "./Components/Header";

import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
    return (
        <Router>

            <Header />
            <hr />

            <main className="container">
                
                <Switch>
                    <Route  component ={Home} exact path="/" ></Route>
                    <Route component={About} path="/about"></Route>

                </Switch>
            </main>

        </Router>
    );
}
export default App;
