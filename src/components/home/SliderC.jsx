import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const SliderC = () => {
  const sliderData = useSelector((state) => state.data.sliderData);
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div className='container-fluid mt-3  ' >
      <Slider  {...settings}>
        {sliderData.map((curEle,index) => (
          <div key={index} className='row d-flex justify-content-center  align-items-center'  >
            <div className='col-md-5 ms-auto  col-sm-12 p-3 ' >
              <p style={{ fontSize: "40px" }} className='w-75 heading mt-2'>{curEle.title}</p>
              <p className='w-75'>{curEle.desc}</p>
              <Link to='/'>Visit Collection</Link>
            </div>
            <div className='col-md-5 me-auto col-sm-12  d-flex justify-content-center align-items-center'>
              <img className='img-fluid rounded ' style={{height:"400px"}} src={curEle.cover} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderC;
