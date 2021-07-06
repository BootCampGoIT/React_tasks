# lesson: "Auth_navigation";

    1. Создание приватных и ограниченных роутов.
        - Модифицируйте массив mainRoutes таким образом, чтобы в нем было разделение роутов на приватные (не приватные) и ограниченные роуты путем добавления соответствующих булевых значений.
            Приватные роуты: "Administration"
            Публичные роуты: "Home", "Products", "Cart",
            Ограниченные: "Registration", "Login"

    2. Создание персистора значений idToken и refreshToken
        - проинсталируйте redux-persist

             npm i redux-persist

        - следуя официальной документации, произведите необходимые действия в отношении значений idToken и refreshToken в authReducer

    3. Создание экшена, предназначенного для разлогинивания пользователя, и удаление соответствующих значений в authReducer

    3. Обеспечение работспособности роутов навигации в соотвествии с соответствующими значениями приватных, публичных и органиченных роутов.

        - Передайте в HeaderList следующие пропы:
            -- значение isAuth, как результат работы селектора, который определяет наличие в глобальном стейте значения idToken.
            -- экшен, который отвечает за разлогинивание пользователя.

        - Создайте отдельный компонент HeaderListItem. Перенесите в него логику создания элемента навигации. Передайте в него соотвествующие пропы.

        - В соотвествии с флагами приватных, публичных и ограниченных роутов создайте в компоненте HeaderListItem соответствующие элементы навигации.

            Пример:

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

        - в компоненте HeaderList создайте элемент, который будет отвечать за разлогинивание пользователя используя экшен, переданный в пропах. Действие производить при событии onClick

        - проверьте работоспособность элементов навигации

    4. Создание компонентов PrivateRoute и PublicRoute.

        - создайте компонент PrivateRoute который рендерит соответсвующий приватный роут в зависимости от значения isAuth.
        Если значение isAuth равно false, то должен происходить редирект на ограниченный роут '/login'. Если true, то рендерится компонент.

            Пример PrivateRoute:

            import React from "react";
            import { Redirect, Route } from "react-router-dom";

            const PrivateRoute = ({
            exact,
            path,
            component: MyComponent,
            isAuth,
            icon,
            }) => {
            return !isAuth ? (
                <Redirect to='/login' />
            ) : (
                <Route
                path={path}
                exact={exact}
                render={(props) => <MyComponent {...props} icon={icon} />}
                key={path}
                />
            );
            };

            export default PrivateRoute;


        - создайте компонент PublicRoute который рендерит соответсвующий публичный или ограниченный роут в зависимости от значений isAuth и isRestricted. Если значения isAuth и isRestricted равно true, то должен происходить редирект на роут '/products/phones'. Если false, то рендерится компонент.

            Пример PublicRoute:

            import React from "react";
            import { Route, Redirect } from "react-router-dom";

            function PublicRoute({
            exact,
            path,
            isAuth,
            component: MyComponent,
            isRestricted,
            icon,
            }) {
            return isAuth && isRestricted ? (
                <Redirect to='/products/phones' />
            ) : (
                <Route
                path={path}
                exact={exact}
                render={(props) => <MyComponent {...props} icon={icon} />}
                key={path}
                />
            );
            }

            export default PublicRoute;

        5. Рендер компонентов PrivateRoute и PublicRoute.
            - В компоненте Main, в зависимости от значения isPrivate рендерить соответствующий роут. Передате компонентам проп isAuth, полученый при помощи соответствущего селектора.

            Пример:

            {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...route} key={route.path} isAuth={isAuth} />
            )
          )}

          - проверьте работоспособность приложения
