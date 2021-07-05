import React, { Component, Suspense } from "react";
import { MainContainer } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { createNewOrder, getAllAdvByCategory } from "../../services/api";
import store from "../../redux/store";
import { addToCart } from "../../redux/cart/cartActions";

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map(({ path, exact, component: MyComponent, icon }) => (
            <Route
              path={path}
              exact={exact}
              render={(props) => <MyComponent {...props} icon={icon} />}
              key={path}
            />
          ))}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
