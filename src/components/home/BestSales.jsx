import React from 'react'
import { CiStar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector } from 'react-redux';

const BestSales = () => {
    const products = useSelector((state) => state.data.products);

    const filterProduct = products ? (products.filter(product =>
        product.category === 'sofa'))
        : ([]);
    return (
        <>
            <div className='bg-light py-5'>

                <center style={{ fontWeight: "600" }} className='fs-1 mb-5 '>Best Seller</center>
                <div className='container '>
                    <div className="row row-cols-md-3 g-4 w-75  mx-auto">
                        {
                            filterProduct.map((curEle) => (
                                <div className="col mx-auto" key={curEle.id}>
                                    <div className="card  mx-auto" style={{ height: "410px" }} >
                                        <img src={curEle.imgUrl} style={{ height: "200px" }} className="img-fluid  card-img-top object-fit-contain rounded mx-auto d-block" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{curEle.productName}</h5>
                                            <p className="card-text"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
                                        </div>


                                        <div className="card-body d-flex justify-content-between">
                                            <p className='card-title fs-2 fw-bold'>$193</p>
                                            <button className='card-title border-0 bg-white'><CiCirclePlus size="50px" /></button>
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


export default BestSales
