import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from "./shared components/header"; 
import Footer from "./shared components/footer";

function recipes() {
  return (
    <div>
        <Helmet>
        <title>A Plate of Love - Recipes</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      recipes
      <Footer/></div>
  )
}

export default recipes