import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;

  .filterLabel {
    display: block;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
  .filterInput {
    width: 100%;
    border: 1px solid #819ff5;
    height: 30px;
    border-radius: 14px;
    padding-left: 10px;
    margin: 5px 0;
    font-size: 14px;
    outline: none;
    display: block;
    &:hover {
      border: 2px solid #5f73a1;
      cursor: pointer;
    }
  }
  .searchIcon {
    width: 20px;
    height: 20px;
    fill: cornflowerblue;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
  }
`;
