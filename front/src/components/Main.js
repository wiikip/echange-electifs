import React, {Fragment} from 'react';
import Board from "../views/Board"
import Banner from "../components/Banner"
import CreateAnnounce from "../views/CreateAnnounce"

import {Link ,  Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from '../views/Home';





let routes = (
  <div>
  
    <Route exact path = "/" component = {Home}>
        
    </Route>
    <Route exact path = "/board">
    <Board/>
    
    
    </Route>
    <Route exact path = "/about" render = {() => <Home/>}>
    
      
    </Route>
    <Route exact path = "/board/add">
    <CreateAnnounce/>
    

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
