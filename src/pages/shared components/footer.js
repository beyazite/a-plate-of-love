import React from 'react'

function footer() {
  return (
   <footer className="bg-success container fixed-bottom">
     {/* <div className='contact-info'>
      <div className='social-media d-flex justify-content-center align-items-center'>
        <p>Social Media</p>
        <br/>
        <br/>
        <ul className='d-flex flex-row '>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
     </div> */}
     <p className='text-center'>Contact Me</p>
     <ul className="list-group list-group-horizontal mx-auto mb-2" style={{width: "150px"}}>
  <li className="list-group-item"><i class="bi bi-linkedin"></i></li>
  <li className="list-group-item"><i class="bi bi-instagram"></i></li>
  <li className="list-group-item"><i class="bi bi-envelope-at"></i></li>
</ul>

   </footer>
  )
}

export default footer;