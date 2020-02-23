import React, {Fragment} from 'react';
import Board from "../views/Board"
import Banner from "../components/Banner"
import CreateAnnounce from "../views/CreateAnnounce"
import useGetUserName from "../hooks/GetUserName"

import {Link ,  Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from '../views/Home';

function Main(props) {
 const user  = useGetUserName()
  return(
  //   <session.Provider>
  user ?
    <Fragment>
    <Router>
      <Banner/>
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
    <Route exact path = "/board/myAnnounces">
      <Board user = {user}/>
    </Route>
  
  </div>
      </Router>
    </Fragment>: <p>Loading</p>
    // </session.Provider>
  )
}

export default Main;
