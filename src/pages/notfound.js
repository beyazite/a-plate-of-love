import React from 'react'
import { Helmet } from 'react-helmet-async'
import {Link} from "react-router-dom";

function notfound() {
  return (
    <div>
        <Helmet>
        <title>A Plate of Love - Page Not Found</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
        notfound
        <Link to="/">Go Main Page</Link>
        </div>
  )
}

export default notfound