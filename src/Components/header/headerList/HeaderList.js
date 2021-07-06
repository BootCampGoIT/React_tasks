import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../../redux/auth/authActions";
import { isAuth } from "../../../redux/auth/authSelectors";
import { mainRoutes } from "../../../routes/mainRoutes";
import HeaderListItem from "./headerListItem/HeaderListItem";

import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = ({ hideModal, isAuth, logOut }) => {
  return (
    <HeaderNavigation>
      <ul className='navigationList'>
        {mainRoutes.map((route) => (
          <HeaderListItem
            route={route}
            hideModal={hideModal}
            isAuth={isAuth}
            key={route.path}
          />
        ))}
        {isAuth && (
          <li className='navigationListItem' onClick={logOut}>
            <span className='logoutLink'>LOGOUT</span>
          </li>
        )}
      </ul>
    </HeaderNavigation>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: isAuth(state),
  };
};

const mapDispatchToProps = {
  logOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderList));
