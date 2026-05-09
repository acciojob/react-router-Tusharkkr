
import React from "react";
import './../styles/App.css';
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
        <Navbar/>
        <Switch>
            <Route path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
    </div>
  )
}

export default App