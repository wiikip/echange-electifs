import React, {Fragment} from 'react';
import Board from "../views/Board"
import Banner from "../components/Banner"
import AddAnnounce from "./AddAnnounce"

import {Link ,  Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from '../views/Home';





let routes = (
  <div>
  
    <Route exact path = "/" component = {Home}>
        
    </Route>
    <Route path = "/board">
    <Board listAnnounce = {[["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]
    ,["ST2", "26/11/19", "Maelle", "Observing Earth", "Propagation Virale", "Ca me sauverait la vie" ]]} />
    <Link to = '/board/add'>Ajouter une annonce</Link>
    
    </Route>
    <Route path = "/about" render = {() => <Home/>}>
    
      
    </Route>
    <Route path = "/board/add">
    <AddAnnounce/>
    <p>YO</p>

    </Route>
  
  
  </div>
)
function Main(props) {
  return(
    <Fragment>
    <Router>
      <Banner/>
      {routes}
      </Router>
    </Fragment>
  )
}

export default Main;
