import React, {Fragment} from 'react';
import Board from "../views/Board"
import Banner from "../components/Banner"

import {Link ,  Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from '../views/Home';
let routes = (
  <div>
    <Switch>
    <Route exact path = "/" component = {Home}>
        
    </Route>
    <Route path = "/board">
    <Board listAnnounce = {[["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]]} />
    </Route>
    <Route path = "/about" render = {() => <Home/>}>
    
      
    </Route>
    </Switch>
  
  </div>
)
function Main(props) {
  return(
    <Fragment>
    <Router>
      {routes}
      </Router>
    </Fragment>
  )
}

export default Main;
