import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/HomePage")),
    exact: true,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Products",
    path: "/products",
    component: lazy(() => import("../pages/ProductsPage")),
    exact: false,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Cart",
    path: "/cart",
    component: lazy(() => import("../pages/CartPage")),
    exact: true,
    icon: "#icon-cart",
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Administration",
    path: "/admin",
    component: lazy(() => import("../pages/AdminPage")),
    exact: true,
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Registration",
    path: "/registration",
    component: lazy(() => import("../pages/AuthPage")),
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/AuthPage")),
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
];
