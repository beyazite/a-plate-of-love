import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/shared components/header";
import Footer from "./components/shared components/footer";
import booklet from "../assets/booklet-recipes.pdf"

function recipes() {
    return (
        <div>
          <Helmet>
            <title>A Plate of Love - Recipes</title>
            <meta name="description" content="Chef Azumi Nino Fajarini" />
          </Helmet>
          <Header/>
          <iframe src={booklet} width="100%" height="800px" style={{position: "absolute", top:"56px"}}/>

          <Footer/>
        </div>
    )
};

export default recipes;