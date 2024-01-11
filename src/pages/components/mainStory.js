import React from 'react'
import azumiBasket from "../../assets/azumi-basket.jpeg";
import azumiFriends from "../../assets/azumi-friends.jpeg";
import azumiGraduated from "../../assets/azumi-graduated.jpeg";

function mainStory() {
  return (
   <div className='container mt-5 text-center '>
    <div className='row mb-2 align-items-center'>
      <div className='col-6 bg-light '><img src={azumiBasket} className='img-fluid rounded' style={{maxHeight: "500px"}}/></div>
      <div className='col-6 bg-light'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum nisi est. Etiam nec efficitur nisl. Fusce laoreet nisl id blandit tempor. Suspendisse tincidunt rhoncus libero ornare varius. Etiam dignissim rhoncus diam, id pellentesque turpis semper in. Sed vel turpis id mi sollicitudin finibus. Praesent venenatis aliquam ante et eleifend. </div>
    </div>
    <div className='row mb-2 align-items-center'>
      <div className='col-6 bg-light'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum nisi est. Etiam nec efficitur nisl. Fusce laoreet nisl id blandit tempor. Suspendisse tincidunt rhoncus libero ornare varius. Etiam dignissim rhoncus diam, id pellentesque turpis semper in. Sed vel turpis id mi sollicitudin finibus. Praesent venenatis aliquam ante et eleifend.  </div>
      <div className='col-6 bg-light'><img src={azumiFriends} className='img-fluid rounded' style={{maxHeight: "500px"}}/></div>
    </div>
    <div className='row mb-5 align-items-center'>
      <div className='col-6 bg-light'><img src={azumiGraduated} className='img-fluid rounded' style={{maxHeight: "500px"}}/></div>
      <div className='col-6 bg-light'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum nisi est. Etiam nec efficitur nisl. Fusce laoreet nisl id blandit tempor. Suspendisse tincidunt rhoncus libero ornare varius. Etiam dignissim rhoncus diam, id pellentesque turpis semper in. Sed vel turpis id mi sollicitudin finibus. Praesent venenatis aliquam ante et eleifend.  </div>
    </div>
   </div>
  )
}

export default mainStory