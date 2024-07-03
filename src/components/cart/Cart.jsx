import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross1 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Loader1 from '../loader/Loader1';
import { removeFromCart, increment , decrement } from '../../redux/productAction/ActionCreator';

const Cart = () => {
    const cart_Data = useSelector(state => state.productData.cartData)
    // const [cart, setCart] = useState(cart_Data);
    const totalPrice = cart_Data.reduce((preValue, curValue) => {
        return preValue + curValue.price *curValue.quantity
    }, 0)

    
    const dispatch = useDispatch()
    // console.log(cart_Data)
    return (
        <>
            {cart_Data && cart_Data.length ? (
                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto col-md-9'>
                            {cart_Data.map((curEle, index) => (
                                <div key={index} className='card mb-3'>
                                    <div className="row g-0">
                                        <div className="col-md-4" >
                                            <img style={{height:"200px"}} src={curEle.imgUrl} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h4 className="card-title">{curEle.productName}</h4>
                                                <div className='mt-5 d-flex align-items-center'>
                                                    <span className="card-text fs- 6" style={{ fontWeight: "400" }}>${curEle.price} x {curEle.quantity}</span>
                                                    <span className="card-text fs-6 ms-4">$ {curEle.price * curEle.quantity}</span>
                                                    <button className='border bg-transparent ms-5 fs-4' onClick={()=>dispatch(increment(curEle.id))}><FaPlus /></button>
                                                    <button className='border bg-transparent ms-2 fs-4' onClick={()=>dispatch(decrement(curEle.id))}><FaMinus /></button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div style={{position:"absolute" ,right:"5px"}}>
                                            <button className='border-0 bg-transparent fs-4 fw-bold' onClick={() => (dispatch(removeFromCart(curEle.id)))}><RxCross1 /></button>
                                        </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className="card" style={{ height: "200px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Cart Summary</h5>
                                    <hr />
                                    <h6 className="card-title text-muted">Total Price: </h6>
                                    <h5>${totalPrice}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <center className='d-flex justify-content-center align-items-center bg-light' style={{ height: "500px" }}><Loader1 /></center>
            )}
        </>
    )
}

export default Cart
