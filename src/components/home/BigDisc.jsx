import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiStar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/productAction/ActionCreator';
import  { showToast } from '../loader/Toaster';

const BigDisc = () => {
  const dispatch = useDispatch();
  const discoutProducts = useSelector((state) => state.data.discoutProducts);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showToast('Product added to cart!');
  };

  return (
    <>
      
      <div className='bg-light py-5 mt-5'>
        <center style={{ fontWeight: "600" }} className='fs-1 mb-5'>Big Discount</center>
        <div className='container'>
          <div className="row row-cols-md-3 g-4 w-75 mx-auto">
            {
              discoutProducts.map((curEle) => (
                <div className="col" key={curEle.id}>
                  <div className="card mx-auto" style={{ height: "410px" }}>
                    <div>
                      <Link to={`/singleProduct/${curEle.id}`}><img src={curEle.imgUrl} style={{ height: "200px" }} className="img-fluid card-img-top object-fit-contain rounded mx-auto d-block" alt="..." /></Link>
                      <span className='badge rounded-pill bg-primary' style={{ position: "absolute", top: "8px", left: "4px" }}>{curEle.discount}% Off</span>
                    </div>
                    <div className="card-body">
                      <Link className='text-decoration-none text-secondary' to={`/singleProduct/${curEle.id}`}><h5 className="card-title">{curEle.productName}</h5></Link>
                      <p className="card-text"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <p className='card-title fs-2 fw-bold'>$193</p>
                      <button className='card-title border-0 bg-white' onClick={() => handleAddToCart(curEle)}><CiCirclePlus size="50px" /></button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default BigDisc;
