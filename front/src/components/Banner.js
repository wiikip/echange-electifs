import React, {Fragment, useState, useEffect} from 'react';
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import useGetUserName from '../hooks/GetUserName'
import { Main} from './Main'
import Cookies from 'universal-cookie';

import { NavLink } from 'react-router-dom';
import axios from 'axios';

const session = new Cookies();



function Banner(props) {
  useGetUserName()
  console.log('cookies sur Banner ', session.get('user'), session.get('logged'), typeof(session.get('logged')))
  function handleLogout(){
    session.remove('user')
    axios.get('/api/logout')
    window.location.reload(false)
  }
  function handleLogin(){
    window.location.assign('/api/login')
    window.location.reload(false)

    
  }

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
        {session.get('logged') === 'true' ? <NavLink className = "nav-link" to = '/board/myAnnounces'>Voir mes annonces</NavLink> : <div></div>}
      </li>
      
  
    
    </ul>
    
    <span>{session.get('logged') === 'true' ? <button type="button" onClick={handleLogout} class="btn btn-danger">{session.get('logged')}</button> : <button type="button" class="btn btn-success" onClick = {handleLogin}>{session.get('logged')}</button>}</span>
    

  </div>
</nav>
    
    
    
  
  )
}


export  default withRouter(Banner);
