import React from "react";
import { connect } from "react-redux";
import { setCartFilter } from "../../redux/cart/cartActions";
import { cartFilterSelector } from "../../redux/cart/cartSelectors";
import { setProductFilter } from "../../redux/products/productsActions";
import { productFilterSelector } from "../../redux/products/productsSelectors";
import { FilterContainer } from "./FilterStyled";
import sprite from "../../icons/products/products.svg";

const Filter = ({ filter, setFilter }) => {
  const onHandleFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <FilterContainer>
      <label className='filterLabel'>
        <svg className='searchIcon'>
          <use href={sprite + "#icon-search"} />
        </svg>
        <input
          type='text'
          value={filter}
          onChange={onHandleFilter}
          placeholder='Enter product name'
          className='filterInput'
        />
      </label>
    </FilterContainer>
  );
};

const getValue = (name, state) => {
  if (name === "cart") {
    return cartFilterSelector(state);
  }
  if (name === "products") {
    return productFilterSelector(state);
  }
};

const getAction = (name, value, dispatch) => {
  if (name === "cart") {
    return dispatch(setCartFilter(value));
  }
  if (name === "products") {
    return dispatch(setProductFilter(value));
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    filter: getValue(ownProps.name, state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: (value) => {
      getAction(ownProps.name, value, dispatch);
    },
  };
};

// const mapDispatchToProps = { setProductFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
