import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
     <>
   <footer className='fixed-bottom'>
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-md-4 p-0 text-center text-md-start">
        <p>© 2018 Ecologytheme. All Rights Reserved.</p>
      </div>
      <div className="col-md-4 p-0 text-center text-md-end">
        <p>Made By <span className="text-main-color">Raghad Moqady</span></p>
      </div>
    </div>
  </div>
</footer>

     </>
  )
}
