import React from 'react'
import Banner from '../banner/Banner'
import { FaSearch } from "react-icons/fa";

const Shop = () => {
  return (
    <>
      <Banner />
      {/* <div class="position-absolute start-50 translate-middle fs-2 fw-bold text-light  w-100 text-center m-auto" style={{ background: " rgba(0, 0, 0, .4) ", height: "450px", lineHeight: "450px", top: "325px" }}>
        <span >Product</span>
      </div> */}
      <div className="container mt-5">
        <div className='d-flex align-item-center '>

          <div class="btn-group ">
            <button type="button" class="btn btn-secondary">Category</button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12 ms-auto col-md-8 col-lg-9  d-flex">
                <input type="text" id="responsive-input" class="form-control rounded-pill " placeholder="Search...." />
                <button style={{ position: "relative", right: "40px", border: "none", backgroundColor: "white" }}><FaSearch size={"15px"} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Shop
