import React, {Fragment} from 'react';
import { withRouter, BrowserRouter as Router } from "react-router-dom";

import { Link } from 'react-router-dom';



function Banner(props) {
  return(
    
    
    <Router>
    
    <nav class="navbar-light">
  <Link class="navbar-brand" to ="/">Echanges Electifs</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      

      
      <li class="nav-item">
       <Link to ="/board" class = "nav-link" activeClassName = "nav-link">Annonces</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to ="/about">About us</Link>
      </li>
      
    </ul>
    
    
  

    
    

  </div>
</nav>
</Router>
    
    
    
  
  )
}


export  default Banner;
