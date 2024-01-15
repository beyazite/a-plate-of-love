import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from "./components/shared components/header";
import Footer from "./components/shared components/footer";
import { PhotoProvider, PhotoView } from 'react-photo-view';


function gallery() {

  const images = ["/assets/azumi-basket.jpeg","assets/food1.jpeg","assets/class.jpeg","assets/food2.jpeg","/assets/azumi-friends.jpeg","assets/food.jpeg","/assets/azumi-graduated.jpeg","assets/food3.jpeg","assets/tree-branch.png","assets/food4.jpeg","assets/applause.jpeg","assets/food5.jpeg","assets/grad.jpeg","assets/grad1.jpeg"];
  return (
    <div>
      <Helmet>
        <title>A Plate of Love - Gallery</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      <div style={{position: "absolute", top: "56px"}}>gallery</div>
      <PhotoProvider >
      <div className="foo mt-5">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt=""  className='m-1' />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
      <Footer/></div>
  )
}

export default gallery