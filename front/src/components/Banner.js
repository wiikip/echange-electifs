import React, {Fragment, useContext} from 'react';
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import useGetUserName from '../hooks/GetUserName'

import { NavLink } from 'react-router-dom';



function Banner(props) {
  const user = useGetUserName()
  
  return(
    
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="navbar-brand" to = "/">Echange Electifs</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to ="/board">Annonces<span className="sr-only">(current)</span></NavLink>
      </li>

      
      <li className="nav-item">
        <NavLink className="nav-link" to = "/about">About us</NavLink>
      </li>
      <li className = "nav-item">
        <NavLink className = "nav-link"to = '/board/add'>Ajouter une annonce</NavLink>
      </li>
      <li className = "nav-item">
        {user && user.login ? <NavLink className = "nav-link" to = '/board/myAnnounces'>Voir mes annonces</NavLink> : <div></div>}
      </li>
      
  
    
    </ul>
    
    <span>{user && user.login ? <a href = '/api/logout' ><button type="button" class="btn btn-danger">Logout</button></a> : <a href = '/api/login' ><button type="button" class="btn btn-success">Login</button></a>}</span>
    

  </div>
</nav>
    
    
    
  
  )
}


export  default withRouter(Banner);
