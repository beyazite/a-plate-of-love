import React from 'react'
import { Helmet } from 'react-helmet-async'
import {Link} from "react-router-dom";
import Header from "./components/shared components/header";
import Footer from "./components/shared components/footer";

function notfound() {
  return (
    <div >
        <Helmet>
        <title>A Plate of Love - Page Not Found</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
        <div className='text-center' style={{position: "absolute", top: "56px"}}>Not Found</div>
        
        <Link to="/" style={{position: "absolute", top: "92px"}}>Go Main Page</Link>
        <Footer/>
        </div>
  )
}

export default notfound