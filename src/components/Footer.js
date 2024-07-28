import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed libero vel ex maximus vulputate nec eu ligula. Curabitur vitae
            magna eget dolor convallis vehicula.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #222;
  color: #fff;
  padding: 2rem 0;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .footer-section {
    h3 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.6;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0.5rem 0;

        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #66B2FF;
          }
        }
      }
    }

    .social-icons {
      display: flex;
      gap: 1rem;

      a {
        color: #fff;
        font-size: 1.5rem;
        transition: color 0.3s;

        &:hover {
          color: #66B2FF;
        }
      }
    }

    .newsletter-form {
      display: flex;

      input {
        flex: 1;
        padding: 0.5rem;
        border: none;
        border-radius: 0.3rem 0 0 0.3rem;
        outline: none;
      }

      button {
        padding: 0.5rem 1rem;
        border: none;
        background: #66B2FF;
        color: #fff;
        border-radius: 0 0.3rem 0.3rem 0;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: #007BFF;
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding: 1rem;
    background: #111;
    margin-top: 2rem;
  }
`;

export default Footer;
