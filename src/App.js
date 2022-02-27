import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Header from "./Components/Header";
import Routes from "./Components/Routes";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                
                <Routes/>
                <Footer/>

                {/* <main className="container">

                    <Switch>
                        <Route component={Home} exact path="/" ></Route>
                        <Route component={About} path="/about"></Route>

                    </Switch>
                </main> */}
            </div>



        </Router>
    );
}
export default App;
