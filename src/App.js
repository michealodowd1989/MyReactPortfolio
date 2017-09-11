import React, { Component}  from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./js/components/pages/Home.js";
import WhatIDo from "./js/components/pages/WhatIDo.js";
import AboutMe from "./js/components/pages/AboutMe.js";
import ContactMe from "./js/components/pages/ContactMe.js";
import WorkPlacement from "./js/components/pages/WorkPlacement.js";

const App = () => (
      <main>
      <BrowserRouter>  
         <Switch>
            <Route exact path='/' component={Home} />   
            <Route exact path='/WhatIDo' component={WhatIDo} />  
            <Route exact path='/AboutMe' component={AboutMe} />
            <Route exact path='/ContactMe' component={ContactMe} />
            <Route exact path='/WorkPlacement' component={WorkPlacement} />
        </Switch>
      </BrowserRouter>  
      </main>
)

export default App;