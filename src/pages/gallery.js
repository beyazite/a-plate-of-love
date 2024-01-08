import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from "./shared components/header";
import Footer from "./shared components/footer";

function gallery() {
  return (
    <div>
      <Helmet>
        <title>A Plate of Love - Gallery</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      <div style={{position: "absolute", top: "56px"}}>gallery</div>
      <Footer/></div>
  )
}

export default gallery