import React from 'react'
import {Link} from "react-router-dom";
function header() {
  return (
    
    <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top">
      <div className="container-fluid position-relative">
      <div className='ps-md-5'  >
       <Link className="navbar-brand" to="/">A Plate of Love - <small>Azumi Fajarini</small></Link>
       </div>
       {/* <div>
        <img src={"images/tree-branch.png"} alt="A tree branch with crimson flowers on it" width="100px"/>
       </div> */}
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">

          <div className='ms-auto'>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
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