import React from 'react'
import Header from "./shared components/header";
import Footer from "./shared components/footer";
import { Helmet } from 'react-helmet-async';

function main() {
  return (
    <div>
      <Helmet>
        <title>A Plate of Love - Main Page</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      
      <Footer/>
    </div>
  )
}

export default main