
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { ProductDetailsContainer } from "./ProductItemDetailsStyled";
import { getProductByIDOperation } from "../redux/products/productsOperations";
import { currentProductSelector } from "../redux/products/productsSelectors";

class ProductItemDetails extends Component {
  async componentDidMount() {
    this.props.getProductByIDOperation(
      this.props.match.params.category,
      this.props.match.params.productID
    );
  }

  goBack = () => {
    if (this.props.location.state) {
      this.props.history.push(this.props.location.state.from);
    } else
      this.props.history.push(`/products/${this.props.match.params.category}`);
  };
  render() {
    const { product } = this.props;
    return (
      <ProductDetailsContainer>
        <button className='goBack' onClick={this.goBack}>
          Go back
        </button>
        {product && (
          <div className='content'>
            <h3 className='listItemTitle'>{product.name}</h3>
            <div className='imageWrapper'>
              <img
                src={product.image}
                alt={product.name}
                className='listItemImage'
              />
            </div>
            <p className='description'>{product.description}</p>
            <p className='priceTitle'>
              {product.isSale ? (
                <>
                  <span className='withSalePrice'>{product.price - 1000}</span>{" "}
                  <span className='withoutSalePrice'>{product.price}</span>
                </>
              ) : (
                <span className='withoutSalePrice'>{product.price}</span>
              )}
              {" грн"}
            </p>
          </div>
        )}
      </ProductDetailsContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: currentProductSelector(state),
  };
};

export default connect(mapStateToProps, { getProductByIDOperation })(
  withRouter(ProductItemDetails)
);
