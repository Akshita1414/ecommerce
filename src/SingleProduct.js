import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import { useCartContext } from "./context/cart_context";
import styled from "styled-components";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  const { addToCart } = useCartContext();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="product-images">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <p className="rating">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button
            className="btn"
            onClick={() => addToCart(product.id, "default", 1, product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background-color: #fff;
    max-width: 1200px;
    margin: 0 auto;
  }

  .product-images {
    flex: 1;
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }

  .product-details {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .category {
      font-size: 1rem;
      color: #888;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    .price {
      font-size: 1.5rem;
      color: #b12704;
      margin-bottom: 1.5rem;
    }

    .rating {
      font-size: 1rem;
      color: #f39c12;
      margin-bottom: 1.5rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      background-color: #ff3e6c;
      color: #fff;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e72e5c;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      padding: 1rem;
    }

    .product-images {
      margin-bottom: 1rem;
    }

    .product-details {
      align-items: center;
      text-align: center;
    }
  }
`;

export default SingleProduct;
