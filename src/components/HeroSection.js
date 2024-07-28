import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <HeroWrapper>
      <Slider {...settings}>
        <div className="slide">
          <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fashion 1" />
          <div className="text">
            <p>Trendy outfits for the season.</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.pexels.com/photos/8387131/pexels-photo-8387131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fashion 2" />
          <div className="text">
            <p>Stylish looks for every occasion.</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.pexels.com/photos/8030173/pexels-photo-8030173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fashion 3" />
          <div className="text">
            <p>Elegant designs and vibrant colors.</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.pexels.com/photos/5531551/pexels-photo-5531551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fashion 4" />
          <div className="text">
            <p>Modern styles and chic accessories.</p>
          </div>
        </div>
      </Slider>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: 100%;
  position: relative;

  .slick-slider {
    width: 100%;
    height: 100%;
  }

  .slick-slide img {
    width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .slick-dots li button:before {
    color: black;
  }

  .slide {
    position: relative;
    text-align: center;
  }

  .text {
    position: absolute;
    bottom: 20px; /* Adjust position as needed */
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
  }

  .text h2 {
    margin: 0;
  }

  .text p {
    margin: 5px 0 0;
  }
`;

export default HeroSection;
