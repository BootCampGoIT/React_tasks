import React from "react";
import { SectionContainer } from "./SectionStyled";
import sprite from "../../icons/products/products.svg";

const Section = ({ children, title: myTitle, icon = "#icon-bookmarks" }) => {
  return (
    <SectionContainer>
      <div className='sectionTitleWrapper'>
        <svg className='categoryIcon'>
          <use href={sprite + icon} />
        </svg>
        <h2 className='sectionTitle'>{myTitle.toUpperCase()}</h2>
      </div>
      <div className='sectionContent'>{children}</div>
    </SectionContainer>
  );
};

export default Section;

Section.defaultProps = {
  isMobiles: false,
};
