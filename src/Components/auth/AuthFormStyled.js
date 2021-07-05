import styled from "styled-components";

export const AuthFormContainer = styled.div`
  .authForm {
    display: flex;
    flex-direction: column;
    width: 280px;
  }

  .authFormInput {
    width: 100%;
    border: 1px solid #819ff5;
    height: 30px;
    border-radius: 14px;
    padding-left: 10px;

    font-size: 14px;
    outline: none;
    display: block;
    &:hover {
      border: 2px solid #5f73a1;
      cursor: pointer;
    }
  }
  .authFormSubmitter {
    margin-top: 20px;
  }
`;
