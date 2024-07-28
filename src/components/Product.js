import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Product = ({ id, title, image, price, category }) => {

  useEffect(() => {
    AOS.init({
      duration : 2000,
      offset: 200,
      once: true
    });
  }, []);
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card" data-aos="fade-up">
        <figure>
          <img src={image} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price"><FormatPrice price={price} /></p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
