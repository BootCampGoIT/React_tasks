import styled from "styled-components";

export const AuthFormContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .authForm {
    display: flex;
    flex-direction: column;
    width: 280px;
  }

  .authFormLabel {
    color: #819ff5;
    font-weight: 600;
  }

  .authFormInput {
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
  .authFormSubmitter {
    margin-top: 25px;
  }
`;
