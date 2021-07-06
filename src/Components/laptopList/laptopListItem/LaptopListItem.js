import React from "react";
import PropTypes from "prop-types";
import { ListItemContainer } from "./LaptopListItemStyled";
import { withRouter } from "react-router-dom";

const LaptopListItem = ({ laptop, addToCart, history, match, location }) => {
  const addProduct = () => {
    addToCart(laptop);
  };
  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${laptop.id}`,
      state: { from: location.pathname },
    });
  };
  return (
    <ListItemContainer>
      <div className='content'>
        <h3 className='listItemTitle'>{laptop.name}</h3>
        <div className='imageWrapper'>
          <img src={laptop.image} alt={laptop.name} className='listItemImage' />
        </div>
        <p className='priceTitle'>
          {laptop.isSale ? (
            <>
              <span className='withSalePrice'>{laptop.price - 1000}</span>{" "}
              <span className='withoutSalePrice'>{laptop.price}</span>
            </>
          ) : (
            <span className='withoutSalePrice'>{laptop.price}</span>
          )}
          {" UAH"}
        </p>
        <div className='options'>
          <button className='detailsButton' onClick={openDetails}>
            Details
          </button>
          <button onClick={addProduct} className='addToCartButton'>
            Add to cart
          </button>
        </div>
      </div>
    </ListItemContainer>
  );
};

export default withRouter(LaptopListItem);

LaptopListItem.propTypes = {
  laptop: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    isSale: PropTypes.bool,
    description: PropTypes.string,
    price: PropTypes.any,
  }),
};
