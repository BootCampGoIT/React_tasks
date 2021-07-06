import React, { Component } from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";
import { connect } from "react-redux";

import { addToCart } from "../../redux/cart/cartActions";
import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";
import LoaderComponent from "../loader/Loader";
import {
  filteredProducts,
  loadingSelector,
} from "../../redux/products/productsSelectors";
import Filter from "../filter/Filter";

class PhoneList extends Component {
  componentDidMount() {
    this.props.getAllAdvByCategoryOperation("phones");
  }

  render() {
    return (
      <>
        <Filter name='products' />
        <PhoneListContainer>
          {this.props.isLoading ? (
            <LoaderComponent />
          ) : (
            <>
              {this.props.phones.map((phone) => (
                <PhoneListItem
                  phone={phone}
                  key={phone.id}
                  addToCart={this.props.addToCart}
                />
              ))}
            </>
          )}
        </PhoneListContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phones: filteredProducts(state, "phones"),
    isLoading: loadingSelector(state),
  };
};

const mapDispatchToProps = { addToCart, getAllAdvByCategoryOperation };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
