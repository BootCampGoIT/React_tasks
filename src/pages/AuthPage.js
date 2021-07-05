import AuthForm from "../Components/auth/AuthForm";
import Section from "../Components/section/Section";

import React from "react";
const AuthPage = (props) => {
  return (
    <Section
      title={
        props.location.pathname === "/registration" ? "registration" : "login"
      }>
      <AuthForm />
    </Section>
  );
};

export default AuthPage;
