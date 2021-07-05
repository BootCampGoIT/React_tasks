import React from "react";
import { connect } from "react-redux";
import { createOrder, removeFromCartByID } from "../../redux/cart/cartActions";
import CartListItem from "./cartListItem/CartListItem";
import { CartListContainer, CartListContainerWrapper } from "./CartListStyled";
import sprite from "../../icons/products/products.svg";
import { getFilteredCart } from "../../redux/cart/cartSelectors";

const CartList = ({ cart, removeFromCartByID, createOrder }) => {
  const getTotalPrice = () =>
    cart.reduce((acc, product) => {
      acc += Number(product.price);
      return acc;
    }, 0);
  return (
    <>
      {/* <Filter name="cart"/> */}
      <CartListContainerWrapper>
        {cart.length ? (
          <>
            <CartListContainer>
              {cart.map((product) => (
                <CartListItem
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCartByID}
                />
              ))}
            </CartListContainer>
            <div className='totalInfo'>
              <p className='totalInfoTitle'>Total price in order:</p>
              <p className='totalInfoPrice'>
                {getTotalPrice()} <span className='totalInfoTitle'>UAH</span>
              </p>
            </div>
            <button type='button' onClick={createOrder} className='orderButton'>
              <svg className='checkoutIcon'>
                <use href={sprite + "#icon-credit-card"} />
              </svg>
              Checkout
            </button>
          </>
        ) : (
          <p>Cart is empty!</p>
        )}
      </CartListContainerWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({ cart: getFilteredCart(state) });

const mapDispatchToProps = { removeFromCartByID, createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
