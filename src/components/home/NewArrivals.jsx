import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CiStar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import {addToCart} from '../../redux/productAction/ActionCreator'
import { Link } from 'react-router-dom';
import  { showToast } from '../loader/Toaster';



const NewArrivals = () => {
    const products = useSelector((state) => state.data.products);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        showToast('Product added to cart!');
      };
    const dispatch=useDispatch()
    const filterProduct = products ? (products.filter(product =>
        product.category === 'mobile' || product.category === 'wireless'))
        : ([]);
   
    return (
        <>
           <div className='py-5'>
           <center style={{ fontWeight: "600" }} className='fs-1  mb-5'>New Arrival</center>
            <div className='container '>
                <div className="row row-cols-md-3 g-4 w-75  mx-auto">
                    {
                        filterProduct.map((curEle) => (
                            <div className="col mt-3  mx-auto" key={curEle.id}>
                                <div className="card  mx-auto" style={{ height: "410px" }} >

                                <Link to={`/singleProduct/${curEle.id}`}>  <img src={curEle.imgUrl} style={{ height: "200px" }} className="img-fluid  card-img-top object-fit-contain rounded mx-auto d-block" alt="..." /></Link>
                                    <div className="card-body">
                                    <Link className='text-decoration-none text-secondary' to={`/singleProduct/${curEle.id}`}><h5 className="card-title">{curEle.productName}</h5> </Link>
                                        <p className="card-text"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
                                    </div>

                                    <div className="card-body d-flex justify-content-between">
                                        <p className='card-title fs-2 fw-bold'>$193</p>
                                        <button className='card-title border-0 bg-white' onClick={()=>{handleAddToCart(curEle)}} ><CiCirclePlus size="50px" /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
           </div>
        </>
    )
}

export default NewArrivals
