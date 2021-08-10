# lesson: "Authorization";

## 1. Создание формы регистрации (авторизации)

- создайте стандартную форму для сбора данных пользователя. Стейт должен содержать два свойства: `email` и `password`

  Пример:

```javascript
import React, { Component } from "react";
import { AuthFormContainer } from "./AuthFormStyled";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <AuthFormContainer>
        <form className='authForm' onSubmit={this.onHandleSubmit}>
          <label className='authFormLabel'>
            Email
            <input
              type='text'
              className='authFormInput'
              name='email'
              onChange={this.onHandleChange}
            />
          </label>
          <label className='authFormLabel'>
            Password
            <input
              type='text'
              className='authFormInput'
              name='password'
              onChange={this.onHandleChange}
            />
          </label>
          <button className='authFormSubmitter' type='submit'></button>
        </form>
      </AuthFormContainer>
    );
  }
}

export default AuthForm;
```

- компонент должен быть универсальным, поэтому необходимо,
  чтобы текст кнопки был либо `"SIGN UP"`, либо `"SIGN IN"`.
  Для реализации данного функционала можно использовать
  текущее значение `location.pathname`. Также компонент
  будет отправлять разные запросы. Поэтому, по событию
  `onSubmit` логично тоже делать подобную проверку и
  вызывать соответствующую операцию. Получить значение
  `location` можно используя `withRouter` из библиотеки `react-router-dom`

## 2. Настройка платформы `Firebase`. Создание запросов для регистрации (авторизации) пользователя

- следуя инструкциям ментора выполните настройку платформы
- в папке `services` создайте файл `auth_api.js`
- создайте две асинхронные функции (`registration` и `login`), которые будут использовать конструкцию `try/catch` и будут выполнять отправку данных (метод `POST`), необходимых для регистрации (авторизации). Примеры запросов необходимо взять из документации `firebase` (следуйте инструкциям ментора)

  Пример:

```javascript
import axios from "axios";
const API_KEY = "AIzaSyATLDI5y-9PDjVk3Ar5YK476ZnTDxOm0TI";

export const registration = async (user) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      { ...user, returnSecureToken: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const login = async (user) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      { ...user, returnSecureToken: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
```

## 3. Создание и настройка глобального стейта для регистрации (авторизации) пользователя - создайте редьюсеры, необходимые для работы с данными пользователя и токеном. Добавьте его в проект

Пример редьюсера:

```javascript
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  resetError,
  setError,
  setLoader,
} from "./authActions";

const authUserReducer = createReducer(null, {
  [registerUser]: (_, action) => action.payload,
  [loginUser]: (_, action) => action.payload,
});

const authLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const authErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [resetError]: () => "",
});

const authReducer = combineReducers({
  user: authUserReducer,
  loader: authLoaderReducer,
  error: authErrorReducer,
});

export default authReducer;
```

- создайте экшены, которые будут вызываться при регистрации и авторизации пользователя

  Пример:

```javascript
import { createAction } from "@reduxjs/toolkit";

const registerUser = createAction("auth/register");
const loginUser = createAction("auth/login");
const logOut = createAction("auth/logout");
const setLoader = createAction("auth/setLoader");
const setError = createAction("auth/setError");
const resetError = createAction("auth/resetError");

export { registerUser, loginUser, logOut, setLoader, setError, resetError };
```

- создайте операции, которые будут вызывать методы оправки данных на сервер и будут производить соответствующие изменения стейта в зависимости от полученного ответа.

  Пример:

```javascript
import { login, registration } from "../../services/auth_api";
import { loginUser, registerUser, setError } from "./authActions";

export const registerOperation = (user) => async (dispatch) => {
  try {
    const response = await registration(user);
    dispatch(registerUser(response));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const loginOperation = (user) => async (dispatch) => {
  try {
    const response = await login(user);
    dispatch(loginUser(response));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
```

- проверьте работоспособность приложения.
