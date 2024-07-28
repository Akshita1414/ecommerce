import React, {useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000,
      offset: 200,
      once: true
    });
  }, []);
  return (
    <AboutWrapper>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Classic Feminine Clothing</h1>
          <Link to="/products" className="shop-now">
            Shop Now
          </Link>
        </div>
      </div>

      <div className="container" data-aos="fade-up-right">
        <div className="about-title">
          <h2>Inspiring Feminine Luxury</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Lucia is a South African clothing brand that is European inspired
              which focuses on creating classic feminine clothing with a hint of
              luxury. Our aim is to give women a feminine and chic experience
              when wearing our garments.
            </p>
          </div>
          <div className="about-images">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion 1"
              />
            </div>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion 2"
              />
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  .hero-section {
    position: relative;
    width: 100%;
    height: 80vh;
    background-image: url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .hero-content {
      text-align: center;
      margin-top: 20px;
      color: white;

       h1 {
         font-size: 3rem;
        color: white;
         font-weight: 700;
         margin-bottom: 1rem;
       }

      .shop-now {
       margin-top: 10px;
        color: white;
        font-size: 3rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }

  padding: 4rem 0;
  background-color: #f9f9f9;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .about-title {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
   

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
    }
  }

  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
      flex-direction: column;
      text-align: left;
    }

    .about-text {
      flex: 1;
      padding: 1rem;

      p {
        font-size: 2rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
    }

    .about-images {
      display: flex;
      gap: 2rem;
      padding: 1rem;
      justify-content: center;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .image {
        flex: 1;
        overflow: hidden;
        border-radius: 0.5rem;

        img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        &:hover img {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export default About;
