import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from "./components/shared components/header"; 
import Footer from "./components/shared components/footer";
import portfolioo from "../assets/portfolio-azumi-nino-fajarini.pdf";


function portfolio() {
  return (
    <div>
        <Helmet>
        <title>A Plate of Love - Portfolio</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      <iframe src={portfolioo} width="100%" height="800px" style={{position: "absolute", top:"56px"}}/>

      <Footer/></div>
  )
}

export default portfolio