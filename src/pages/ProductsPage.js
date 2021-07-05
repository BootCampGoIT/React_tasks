import React, { Suspense, useEffect } from "react";
import { productsRoutes } from "../routes/productsRoutes";
import { NavLink, Route, Switch } from "react-router-dom";
import { ProductsPageContainer } from "./ProductsPageStyled";
import Section from "../Components/section/Section";

const ProductsPage = ({ match, data, history }) => {
  useEffect(() => {
    history.push(match.path + "/phones");
  }, []);

  return (
    <ProductsPageContainer>
      <ul className='navigationList'>
        {productsRoutes.map(
          (route) =>
            route.isLink && (
              <li className='navigationListItem' key={route.path}>
                <NavLink
                  to={match.url + route.path}
                  exact={route.exact}
                  className='navigationListItemAnchor'
                  activeClassName='navigationListItemActive'>
                  {route.name}
                </NavLink>
              </li>
            )
        )}
      </ul>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {productsRoutes.map(
            ({ name, path, exact, component: MyComponent }) => (
              <Route
                key={path}
                path={match.path + path}
                exact={exact}
                render={() => <MyComponent {...data} />}
              />
            )
          )}
        </Switch>
      </Suspense>
    </ProductsPageContainer>
  );
};

export default ProductsPage;
