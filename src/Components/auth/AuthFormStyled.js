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
    align-items: center;
    max-width: 300px;
  }

  .authFormLabel {
    color: #819ff5;
    width: 280px;
    font-weight: 600;
  }
  .labelTitle {
    font-size: 14px;
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
    padding: 0 30px;
  }
`;
