import React from "react";
import { NavLink } from "react-router-dom";

const HeaderListItem = ({ route, isAuth, hideModal }) => {
  const { path, name, exact, isPrivate, isRestricted } = route;
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li className='navigationListItem' key={route.path}>
          <NavLink
            to={path}
            exact={exact}
            className='navigationListItemAnchor'
            activeClassName='navigationListItemActive'
            onClick={hideModal}>
            {name}
          </NavLink>
        </li>
      )}
      {!isAuth && isRestricted && !isPrivate && (
        <li className='navigationListItem' key={route.path}>
          <NavLink
            to={path}
            exact={exact}
            className='navigationListItemAnchor'
            activeClassName='navigationListItemActive'
            onClick={hideModal}>
            {name}
          </NavLink>
        </li>
      )}
      {isPrivate && isAuth && (
        <li className='navigationListItem' key={route.path}>
          <NavLink
            to={path}
            exact={exact}
            className='navigationListItemAnchor'
            activeClassName='navigationListItemActive'
            onClick={hideModal}>
            {name}
          </NavLink>
        </li>
      )}
      
    </>
  );
};

export default HeaderListItem;
