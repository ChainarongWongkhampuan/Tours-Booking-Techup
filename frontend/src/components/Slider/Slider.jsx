import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/best-1.webp"
import ava02 from "../../assets/images/best-2.webp";
import ava03 from "../../assets/images/best-3.webp";
import ava04 from "../../assets/images/best-4.webp";

const Slid = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    <Slider {...settings}>
      <div className="testimonial py-2 px-2 mx-5">
          <div>
            <h6 className="mb-0 mt-3">Tha Phae Gate </h6>
          </div>
        <div className="d-flex align-items-center mt-3">
          <img src={ava01} className="w-75 h-150 rounded-2 " alt="" />
        </div>
      </div>
      <div className="testimonial py-2 px-2 mx-5">
          <div>
            <h6 className="mb-0 mt-3">Wat Phra That Doi Suthep</h6>
          </div>
        <div className="d-flex align-items-center mt-3">
          <img src={ava02} className="w-75 h-150 rounded-2 " alt="" />
        </div>
      </div>
      <div className="testimonial py-2 px-2 mx-5">
          <div>
            <h6 className="mb-0 mt-3">Elephant Sanctuary</h6>
          </div>
        <div className="d-flex align-items-center mt-3">
          <img src={ava03} className="w-75 h-150 rounded-2 " alt="" />
        </div>
      </div>
      <div className="testimonial py-2 px-2 mx-5">
          <div>
            <h6 className="mb-0 mt-3">The White Temple - Wat Rong Khun</h6>
          </div>
        <div className="d-flex align-items-center mt-3">
          <img src={ava04} className="w-75 h-150 rounded-2 " alt="" />
        </div>
      </div>
    
      
      

     
      
    </Slider>

  );
};

export default Slid;
