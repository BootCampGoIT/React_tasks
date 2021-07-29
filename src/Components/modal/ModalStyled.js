import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b2;
  z-index: 1200;
  overflow: auto;

  .Modal {
    position: relative;
    background-color: #3d3d3d;
    border-radius: 14px;
    overflow: hidden;
  }

  .modalIcon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modalBtn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    fill: #504f4f;
  }
  .modalBtn:hover {
    fill: #819ff5;
  }
`;

// const state = {
//   cart: [],
//   products: {
//     phones: [],
//     laptops: [{}, {}, {}],
//   },
// };

// const product = {
//   name: "fghj",
//   price: 20,
//   description: "",
//   isSale: true,
//   category: "laptops", //'phones'
//   id: "hjjkjkl",
// };

// const createNewAdv = (product) => {
//   this.setState((prev) => ({
//     products: {
//       ...prev.products,
//       [product.category]: [...prev.products[product.category], product],
//     },
//   }));
// };
