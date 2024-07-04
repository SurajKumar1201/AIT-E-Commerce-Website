import React, { useState } from 'react';
import Banner from '../banner/Banner';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { CiCirclePlus } from "react-icons/ci";
import Select from 'react-select';
import  { showToast } from '../loader/Toaster';
import {addToCart} from '../../redux/productAction/ActionCreator'
import Heart from '../loader/Heart';
import { Link } from 'react-router-dom';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Shop = () => {
  const options = [
    { value: "", label: "All Categories" },
    { value: "sofa", label: "Sofa" },
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "mobile", label: "Mobile" },
    { value: "wireless", label: "Wireless" },
  ];
  const dispatch=useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showToast('Product added to cart!');
  };

  const products = useSelector((state) => state.data.products);
  const [selectedCategory, setSelectedCategory] = useState({ value: "", label: "All Categories" });
  const [textInput, setTextInput] = useState("");

  const handleChange = (option) => {
    setSelectedCategory(option);
  };

  const handleFilter = (e) => {
    setTextInput(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory.value === "" || product.category === selectedCategory.value;
    const matchesText = product.productName.toLowerCase().includes(textInput.toLowerCase());
    return matchesCategory && matchesText;
  });

  return (
    <>
      <Banner />
      <div>
        <span className="position-absolute start-50 translate-middle fs-2 fw-bold text-light w-25 text-center m-auto" style={{ background: "rgba(0, 0, 0, .4)", top: "325px" }}>Product</span>
      </div>

      <div className="container mt-5">
        <div className='d-flex'>
          <div className='col-2'>
            <Select
              options={options}
              placeholder="Filter By Category"
              onChange={handleChange}
              value={selectedCategory}
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 ms-auto col-md-8 col-lg-9 d-flex">
                <input
                  type="text"
                  id="responsive-input"
                  className="form-control rounded-pill"
                  placeholder="Search...."
                  onChange={handleFilter}
                  value={textInput}
                />
                <p style={{ position: "relative", right: "40px", top: "5px", opacity: "0.5", cursor: "pointer" }}>
                  <FaSearch size={"20px"} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <div className='container my-5'>
          <div className="row row-cols-md-3 g-4 w-75 mx-auto">
            {filteredProducts.map((curEle,index) => (
              <div className="col mt-3 mx-auto" key={index}>
                <div className="card mx-auto" style={{ height: "410px" }}>
                <div style={{position:"absolute",right:"20px", top:"10px" }}><Heart/></div>
                <Link to={`/singleProduct/${curEle.id}`}>  <img src={curEle.imgUrl} style={{ height: "200px" }} className="img-fluid  card-img-top object-fit-contain rounded mx-auto d-block" alt="..." /></Link>
                  <div className="card-body">
                  <Link className='text-decoration-none text-secondary' to={`/singleProduct/${curEle.id}`}><h5 className="card-title">{curEle.productName}</h5> </Link>
                  {[1, 2, 3, 4, 5].map((index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            style={{ color: index <= curEle.avgRating ? 'gold' : 'grey' }}
                          />
                        ))}
                  </div>
                  <div className="card-body d-flex justify-content-between">
                    <p className='card-title fs-2 fw-bold'>${curEle.price}</p>
                    <button className='card-title border-0 bg-white'>
                      <CiCirclePlus size="50px" onClick={()=>{handleAddToCart(curEle)}} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
