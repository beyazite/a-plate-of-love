import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from "./components/shared components/header";
import Footer from "./components/shared components/footer";
import { PhotoProvider, PhotoView } from 'react-photo-view';


function gallery() {

  const images = ["./a-plate-of-love/assets/azumi-basket.jpeg","./a-plate-of-love/assets/food1.jpeg","./a-plate-of-love/assets/class.jpeg","./a-plate-of-love/assets/food2.jpeg","./a-plate-of-love/assets/azumi-friends.jpeg","./a-plate-of-love/assets/food.jpeg","./a-plate-of-love/assets/azumi-graduated.jpeg","./a-plate-of-love/assets/food3.jpeg","./a-plate-of-love/assets/tree-branch.png","./a-plate-of-love/assets/food4.jpeg","./a-plate-of-love/assets/applause.jpeg","./a-plate-of-love/assets/food5.jpeg","./a-plate-of-love/assets/grad.jpeg","./a-plate-of-love/assets/grad1.jpeg"];
  return (
    <div>
      <Helmet>
        <title>A Plate of Love - Gallery</title>
        <meta name="description" content="Chef Azumi Nino Fajarini" />
      </Helmet>
      <Header/>
      <PhotoProvider>
      <div className="foo mt-5 mb-4">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt=""  className='mt-3 ms-1' style={{maxWidth: "98%"}}/>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
      <Footer/></div>
  )
}

export default gallery