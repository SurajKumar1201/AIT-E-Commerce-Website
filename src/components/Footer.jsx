import React from 'react'
import logo from '../Assets/Images/AchiversIt-Logo.png';

const Footer = () => {
  return (
    <>
      <div style={{backgroundColor:"#002266", opacity:"0.9"}} className="container-fluid">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top">
          <div className="col ms-auto">
            <a href="/" className="d-flex  align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img src={logo} className="bi me-2" height="50"></img>
            </a>
            <p className="fs-5" style={{color:"#d9d9d9"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aliquam excepturi cum, recusandae officiis ducimus sit deserunt fugiat quae voluptas!</p>
          </div>

          

          <div className="col mb-4">
            <h3 style={{color:"#d9d9d9"}}>About Us</h3>
            <ul className="nav flex-column ">
              <li className="nav-item mb-2 "><a style={{color:"#d9d9d9"}} href="#" className="nav-link p-0 ">Career</a></li>
              <li className="nav-item mb-2 "><a href="#" style={{color:"#d9d9d9"}} className="nav-link p-0 ">Our Stores</a></li>
              <li className="nav-item mb-2 "><a href="#" style={{color:"#d9d9d9"}} className="nav-link p-0 ">Our Cares</a></li>
              <li className="nav-item mb-2 "><a href="#" style={{color:"#d9d9d9"}} className="nav-link p-0 ">Terms & Conditions</a></li>
              <li className="nav-item mb-2 "><a href="#" style={{color:"#d9d9d9"}} className="nav-link p-0 ">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col mb-4">
            <h3 style={{color:"#d9d9d9"}}>Customer Care</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 "style={{color:"#d9d9d9"}}>Help Center</a></li>
              <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 "style={{color:"#d9d9d9"}}>How To Buy</a></li>
              <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 "style={{color:"#d9d9d9"}}>Track Your Order</a></li>
              <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 "style={{color:"#d9d9d9"}}>Corporate & Bulk Purchasing</a></li>
              <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 "style={{color:"#d9d9d9"}}>Returns & Refunds</a></li>
            </ul>
          </div>

          <div className="col mb-4 me-auto">
            <h3 style={{color:"#d9d9d9"}}>Contact Us</h3>
            <p style={{color:"#d9d9d9"}} className='fs-5'>70 Washington Square South, New York, NY, 10012, United States</p>
            <p style={{color:"#d9d9d9"}} className='fs-5'>Email: example@gmail.com</p>
            <p style={{color:"#d9d9d9"}} className='fs-5'>Phone: +91 1234567890</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
