import React, { Component } from "react";
import { AdvFormContainer } from "./AdvFormStyled";
import { v4 as uuidv4 } from "uuid";
import { createNewAdv } from "../../services/api";

const productCategories = ["phones", "laptops"];

const initialState = {
  category: productCategories[0],
  name: "",
  image: "",
  description: "",
  price: "",
  isSale: false,
};

class AdvForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();

    createNewAdv(this.state.category, { ...this.state });
  };
  render() {
    return (
      <AdvFormContainer>
        <form onSubmit={this.onHandleSubmit} className='advForm'>
          <div className='advFormContent'>
            <div className='leftColumn'>
              <label className='advFormLabel'>
                Category
                <select
                  value={this.state.category}
                  name='category'
                  className='advFormInput'
                  onChange={this.onHandleChange}>
                  {productCategories.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className='advFormLabel'>
                Name
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  className='advFormInput'
                  onChange={this.onHandleChange}
                />
              </label>
              <label className='advFormLabel'>
                Picture
                <input
                  type='text'
                  name='image'
                  value={this.state.image}
                  className='advFormInput'
                  onChange={this.onHandleChange}
                />
              </label>
            </div>
            <div className='rightColumn'>
              <label className='advFormLabel'>
                Description
                <input
                  type='text'
                  name='description'
                  value={this.state.description}
                  className='advFormInput'
                  onChange={this.onHandleChange}
                />
              </label>
              <label className='advFormLabel'>
                Price
                <input
                  type='text'
                  name='price'
                  value={this.state.price}
                  className='advFormInput'
                  onChange={this.onHandleChange}
                />
              </label>
              <label className='advFormLabelCheckBox'>
                In sale
                <input
                  type='checkbox'
                  name='isSale'
                  checked={this.state.isSale}
                  className='advFormCheckBox'
                  onChange={this.onHandleChange}
                />
              </label>
            </div>
          </div>
          <button type='submit' className='submitButton'>
            Add product
          </button>
        </form>
      </AdvFormContainer>
    );
  }
}

export default AdvForm;

