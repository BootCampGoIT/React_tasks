import styled from "styled-components";

export const SectionContainer = styled.div`
  .sectionTitleWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    /* background-color: #312d2d; */
    border-bottom: 2px solid #819ff5;
    padding: 10px 20px;
  }
  .sectionTitle {
    color: #819ff5;
    font-size: 16px;
    text-align: center;
    padding-left: 10px;
  }
  .categoryIcon {
    width: 20px;
    height: 20px;
    fill: #819ff5;
  }
  .sectionContent {
    padding: 20px;
  }

  @media (min-width: 768px) {
    .sectionTitleWrapper {
      justify-content: flex-start;
    }
  }
`;
