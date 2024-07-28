import React from "react";
import { useCartContext } from "./context/cart_context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from 'aos';
import { useEffect } from "react";

const Cart = () => {
  const {
    cart,
    clearCart,
    total_item,
    total_price,
    removeItem,
    setIncrement,
    setDecrease,
  } = useCartContext();

  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
  }, []);

  if (cart.length === 0) {
    return (
      <Wrapper>
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to see them here.</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </EmptyCart>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="available-offers">
          <h3>Available Offers</h3>
          <p>7.5% Instant Discount on up to ₹750 every spends.</p>
          <button className="show-more-btn">Show More</button>
        </div>

        <div className="cart-items" data-aos="fade-up-right">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>Color: {item.color}</p>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => setDecrease(item.id)}>-</button>
                  <span>{item.amount}</span>
                  <button onClick={() => setIncrement(item.id)}>+</button>
                </div>
                <p>Subtotal: ₹{item.price * item.amount}</p>
              </div>
              <button
                className="remove-item-btn"
                onClick={() => removeItem(item.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <p>Total Items: {total_item}</p>
          <p>Total Price: ₹{total_price}</p>
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>

      <Sidebar>
        <div className="coupon-section">
          <h3>Apply Coupons</h3>
          <input type="text" placeholder="Enter coupon code" />
          <button className="apply-coupon-btn">Apply</button>
        </div>

        <div className="gift-wrap-section">
          <h3>Gifting & Personalisation</h3>
          <p>
            Buying for a loved one? Gift wrap and personalised message on card,
            Only for ₹25
          </p>
          <button className="add-gift-wrap-btn">Add Gift Wrap</button>
        </div>

        <div className="donation-section">
          <h3>Support Transformative Social Work in India</h3>
          <p>Donate and make a difference</p>
          <div className="donation-options">
            <button>₹10</button>
            <button>₹20</button>
            <button>₹50</button>
            <button>₹100</button>
          </div>
        </div>
      </Sidebar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;

  .cart-container {
    flex: 3;
    max-width: 70%;
    margin: 3rem;
    padding: 3rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .clear-cart-btn {
      margin-top: 1.5rem;
      background-color: #66b2ff;
      color: #fff;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #007bff;
      }
    }

    .show-more-btn {
      margin-top: 1.5rem;
      background-color: #66b2ff;
      color: #fff;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #007bff;
      }
    }

    .cart-header,
    .available-offers,
    .cart-items,
    .cart-summary {
      margin-bottom: 3rem;
    }

    .cart-header {
    margin-left: 10rem;
    }

    .available-offers{
    margin-left: 10rem;
    }

    .available-offers h3,
    .coupon-section h3,
    .gift-wrap-section h3,
    .donation-section h3,
    .price-details-section h3 {
      margin-bottom: 2rem;
    }

    .cart-items {
      border-top: 1px solid #ccc;
      padding-top: 1rem;
    }

    .cart-item {
      display: flex;
      align-items: center;
      margin-bottom: 5rem;

      img {
        width: 150px;
        height: auto;
        border-radius: 8px;
        margin-right: 12rem;
        margin-left: 10rem;
      }

      .item-details {
        flex: 2;

        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        p {
          margin: 0.5rem 0;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          margin-top: 1rem;

          button {
            background-color: #66b2ff;
            color: #fff;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s;

            &:hover {
              background-color: #007bff;
            }
          }

          span {
            margin: 0 1rem;
          }
        }
      }

      .remove-item-btn {
        background: none;
        border: none;
        color: #66b2ff;
        cursor: pointer;
        font-size: 1.5rem;

        i {
          transition: color 0.3s;

          &:hover {
            color: #007bff;
          }
        }
      }
    }

    .cart-summary {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }

      .checkout-btn {
        background-color: #66b2ff;
        color: #fff;
        border: none;
        padding: 0.75rem 2rem;
        cursor: pointer;
        font-size: 1.5rem;
        border-radius: 4px;
        transition: background-color 0.3s;

        &:hover {
          background-color: #007bff;
        }
      }
    }
  }
`;

const Sidebar = styled.aside`
  flex: 1;
  max-width: 30%;
  margin: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .coupon-section,
  .gift-wrap-section,
  .donation-section,
  .price-details-section {
    margin-bottom: 7rem;
  }

  .apply-coupon-btn,
  .add-gift-wrap-btn,
  .donation-options button {
    background-color: #66b2ff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
    margin-top: 2.5rem;

    &:hover {
      background-color: #007bff;
    }
  }
  
  .apply-coupon-btn{
  margin-left: 2rem;
  }

  .donation-options button {
    margin-right: 0.5rem;
    margin-top: 1.5rem;
  }

  .price-details-section p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .continue-shopping {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #66b2ff;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #007bff;
    }
  }
`;

export default Cart;
