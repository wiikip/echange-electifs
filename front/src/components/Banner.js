import React, {Fragment} from 'react';
import { withRouter, BrowserRouter as Router } from "react-router-dom";

import { Link } from 'react-router-dom';



function Banner(props) {
  return(
    
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" to = "/">Echange Electifs</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to ="/board">Annonces<span className="sr-only">(current)</span></Link>
      </li>

      
      <li className="nav-item">
        <Link className="nav-link" to = "/about">About us</Link>
      </li>
    </ul>
    

    

  </div>
</nav>
    
    
    
  
  )
}


export  default withRouter(Banner);
