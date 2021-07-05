import React from "react";
import CartList from "../Components/cart/CartList";
import Section from "../Components/section/Section";

const CartPage = ({ icon }) => {
  return (
    <Section title='Cart' icon={icon}>
      <CartList />
    </Section>
  );
};

export default CartPage;
