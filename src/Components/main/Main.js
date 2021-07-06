import React, { Suspense } from "react";
import { MainContainer } from "./MainStyled";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

import { isAuth } from "../../redux/auth/authSelectors";
import { connect } from "react-redux";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import LoaderComponent from "../loader/Loader";

const Main = ({ isAuth }) => {
  return (
    <MainContainer>
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...route} key={route.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: isAuth(state),
  };
};

export default connect(mapStateToProps)(Main);
