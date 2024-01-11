import React from 'react'

function footer() {
  return (
   <footer className="bg-success container fixed-bottom rounded-top">
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
     <p className='text-center mb-1'>Contact Me</p>
     <ul className="list-group list-group-horizontal mx-auto mb-2 " style={{width: "150px"}}>
  <a href="https://linkedin.com/in/nino-azumi-fajarini-483740200/" target='_blank' className='rounded-start'><li className="list-group-item"><i class="bi bi-linkedin"></i></li></a>
  <a href='https://instagram.com/savourybynazumi/' target='_blank'><li className="list-group-item"><i class="bi bi-instagram"></i></li></a>
  <a href='mailto:ohanazumi@gmail.com' className='rounded-end'><li className="list-group-item"><i class="bi bi-envelope-at"></i></li></a>
</ul>

   </footer>
  )
}

export default footer;