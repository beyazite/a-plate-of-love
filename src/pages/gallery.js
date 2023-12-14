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
      gallery
      <Footer/></div>
  )
}

export default gallery