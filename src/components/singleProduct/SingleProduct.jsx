import React, { useState } from 'react'
import Banner from '../banner/Banner'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";


const image = {
  height: "800px",
  width: '700px'
}


const SingleProduct = () => {
  const [count, setCount] = useState(0)
  const { id } = useParams()
  const products = useSelector((state) => state.data.products);
  // console.log(id)
  const single = products.find(data => data.id === id)

  return (
    <div>
      <Banner />

      {/* <span class="position-absolute start-50 translate-middle fs-2 fw-bold text-light  w-100 text-center m-auto" style={{ background: " rgba(0, 0, 0, .4) ", height: "450px", lineHeight: "450px", top: "325px" }}>{single.productName}</span> */}
      <div>
        {
          <>
            <div className='container mt-5'>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 col-sm-12 border'>
                  <img className='img-fluid' src={single.imgUrl} alt="" />
                </div>

                <div className='col-md-6 col-sm-12 border'>
                  <h1 className=''>{single.productName}</h1>

                  <div className='d-flex '>
                    <p className="card-text col-3"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
                    <p>Rating: {single.avgRating}</p>
                  </div>

                  <div className='d-flex '>
                    <h2 className='col-2'>${single.price}</h2>
                    <p >Category: {single.category}</p>
                  </div>

                  <p>{single.shortDesc}</p>
                  <input type="text" className='form-control w-25 mt-3' />
                  <button type="button" class="btn btn-primary mt-3">Add To Cart</button>

                </div>
              </div>
            </div>

            <div className='container-fluid col-11 mt-5'>
              <div>
                <button type="button" class="border-0 bg-white">Description</button>
                <button type="button" class="border-0 bg-white">Reviews </button>
              </div>
              <div className='mt-3'>
                <p>{single.description}</p>
              </div>

            </div>

            <div className='container-fluid col-11 my-5'>
              <h3>You Might Like</h3>
              <div className="container">

              </div>
            </div>

            {/* Cards */}
            <div>
              <div className='container mb-5'>
                <div className="row row-cols-md-3 g-4 w-75  mx-auto">
                  {
                    products.map((curEle) => (
                    <>
                    {single.category==curEle.category?(<div className="col" key={curEle.id}>
                        <div className="card  mx-auto" style={{ height: "410px" }} >
                          <div>
                            <Link to={`/singleProduct/${curEle.id}`}><img src={curEle.imgUrl} style={{ height: "200px" }} className="img-fluid  card-img-top object-fit-contain rounded mx-auto d-block" alt="..." /></Link>
                          </div>

                          <div className="card-body">
                            <Link className='text-decoration-none text-secondary' to={`/singleProduct/${curEle.id}`}><h5 className="card-title ">{curEle.productName}</h5></Link>
                            <p className="card-text"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
                          </div>


                          <div className="card-body d-flex justify-content-between">
                            <p className='card-title fs-2 fw-bold'>$193</p>
                            <button className='card-title border-0 bg-white ' ><CiCirclePlus size="50px" /></button>
                          </div>
                        </div>
                      </div>):([])}
                      
                      </>  
                    ))
                  }
                </div>
              </div>

            </div>
          </>
        }
      </div>
    </div>
  )
}

export default SingleProduct
