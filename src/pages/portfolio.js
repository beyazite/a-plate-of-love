import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from "./shared components/header"; 
import Footer from "./shared components/footer";
import portfolio from "../assets/portfolio-azumi-nino-fajarini.pdf";


function recipes() {
  return (
    <div>
        <Helmet>
        <title>A Plate of Love - Recipes</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      <iframe src={portfolio} width="100%" height="800px" style={{position: "absolute", top:"56px"}}/>

      <Footer/></div>
  )
}

export default recipes