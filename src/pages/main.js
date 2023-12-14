import React from 'react'
import Header from "./shared components/header";
import { Helmet } from 'react-helmet-async'

function main() {
  return (
    <div>
      <Helmet>
        <title>A Plate of Love - Main Page</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
    </div>
  )
}

export default main