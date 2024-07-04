import React from 'react';
import Banner from '../banner/Banner';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  CiCirclePlus } from "react-icons/ci";
import { addToCart } from '../../redux/productAction/ActionCreator';
import { showToast } from '../loader/Toaster';
import Heart from '../loader/Heart';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.data.products);
  const single = products.find(data => data.id === id);

  

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product }));
    showToast('Product added to cart!');
  };

  return (
    <div>
      <Banner />
      <div>
        <span className="position-absolute start-50 translate-middle fs-2 fw-bold text-light w-25 text-center m-auto" style={{ background: "rgba(0, 0, 0, .4)", top: "280px" }}>{single.productName}</span>
      </div>
      <div>
        {
          <>
            <div className='container mt-5'>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 col-sm-12 '>
                  <img className='img-fluid' src={single.imgUrl} alt="" />
                </div>

                <div className='col-md-6 col-sm-12 '>
                  <h1 className=''>{single.productName}</h1>

                  <div className='d-flex '>
                  <p className='me-3'>{[1, 2, 3, 4, 5].map((index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            style={{ color: index <= single.avgRating ? 'gold' : 'grey' }}
                          />
                        ))}</p>
                    <p>Rating: {single.avgRating}</p>
                  </div>

                  <div className='d-flex '>
                    <h2 className='col-2'>${single.price}</h2>
                    <p >Category: {single.category}</p>
                  </div>

                  <p>{single.shortDesc}</p>
                  
                  <button 
                    type="button" 
                    className="btn btn-primary mt-3" 
                    onClick={() => handleAddToCart(single)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className='container-fluid col-11 mt-5'>
              <div>
                <button type="button" className="border-0 bg-white">Description</button>
                <button type="button" className="border-0 bg-white">Reviews </button>
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

            <div className='mb-5'>
              <div className='container '>
                <div className="row row-cols-md-3 g-4 w-75  mx-auto">
                  {
                    products.map((curEle,index) => (
                      <>
                        {single.category === curEle.category ? (
                          <div className="col mt-3  mx-auto" key={index}>
                            <div className="card  mx-auto" style={{ height: "410px" }} >
                              <div style={{position:"absolute",right:"20px", top:"10px" }}><Heart/></div>
                              <Link to={`/singleProduct/${curEle.id}`}>
                                <img src={curEle.imgUrl} style={{ height: "200px" }} className="img-fluid  card-img-top object-fit-contain rounded mx-auto d-block" alt="..." />
                              </Link>
                              <div className="card-body">
                                <Link className='text-decoration-none text-secondary' to={`/singleProduct/${curEle.id}`}>
                                  <h5 className="card-title">{curEle.productName}</h5>
                                </Link>
                                {[1, 2, 3, 4, 5].map((index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            style={{ color: index <= curEle.avgRating ? 'gold' : 'grey' }}
                          />
                        ))}
                              </div>

                              <div className="card-body d-flex justify-content-between">
                                <p className='card-title fs-2 fw-bold'>$193</p>
                                <button 
                                  className='card-title border-0 bg-white'  
                                  onClick={() => handleAddToCart(curEle)}
                                >
                                  <CiCirclePlus size="50px" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : ([])}

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

export default SingleProduct;
