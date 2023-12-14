import React from 'react'
import {Link} from "react-router-dom";
function header() {
  return (
    
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
      <div className='d-flex-md mx-auto' style={{width: "160px"}}>
       <Link className="navbar-brand" to="/">A Plate of Love - <small>Azumi Fajarini</small></Link>
       </div>
       
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='d-flex justify-content-end'>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
          </ul>
          
        </div>
       </div>
       
       </div>
       
    </nav>
    
  )
 
}

export default header