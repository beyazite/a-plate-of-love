import React from 'react'
import Header from "./components/shared components/header";
import Footer from "./components/shared components/footer";
import MainStory from './components/mainStory';
import { Helmet } from 'react-helmet-async';

function main() {
  return (
    <div>
      <Helmet>
        <title>A Plate of Love - Main Page</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      <MainStory/>
      <Footer/>
    </div>
  )
}

export default main