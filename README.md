# lesson: "Redux";

## Task 1. Настройка хранилища.

- Добавить пакет react-redux в проект (npm install react-redux).
- в папке src создать папку redux, а в ней файл store.js
- в папке redux создать папку cart, а в ней файл cartReducer.js, который будет отвечать за состояние компонентов для работы с корзиной:
  - создать редьюсер (cartItemsReducer) для элементов, которые будут добавляться в корзину.
  - создать редьюсер (cartLoaderReducer), который будет отвечать за состояние загрузки данных (loader)
  - создать редьюсер (cartErrorReducer), который будет отвечать за состояне ошибки.
  - комбинируйте созданные редьюсеры в один редьюсер (cartReducer)

```javascript
import { combineReducers } from "redux";

const cartItemsReducer = (state = [], action) => {
  return state;
};
const cartLoaderReducer = (state = false, action) => {
  return state;
};
const cartErrorReducer = (state = "", action) => {
  return state;
};

const cartReducer = combineReducers({
  items: cartItemsReducer,
  loader: cartLoaderReducer,
  error: cartErrorReducer,
});

export default cartReducer;
```

- в папке redux создать папку products, а в ней файл productsReducer.js, который будет отвечать за состояние компонентов для работы с продуктами (действия аналогично как для корзины). Предусмотрите то, что компонент будет отвечать за работу с несколькими категориями:

```javascript
import { combineReducers } from "redux";

const productItemsReducer = (state = { phones: [], laptops: [] }, action) => {
  return state;
};
const productsLoaderReducer = (state = false, action) => {
  return state;
};
const productsErrorReducer = (state = "", action) => {
  return state;
};

const productsReducer = combineReducers({
  items: productItemsReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;
```

- в папке redux создать файл rootReducer.js, который будет отвечать за контроль состояния компонентов пользовательского интерфейса всего проекта. Произведите комбинацию редьюсеров корзины и продуктов.

```javascript
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
```

- В файле store.js импортировать функцию createStore из библиотеки redux;

```javascript
import { createStore } from "redux";
```

- создайте переменную store, в которую проинициализируйте начальное значение состояния всего проекта

```javascript
const store = createStore(rootReducer);
```

- добавьте в проект пакет redux-devtools-extension, который будет позволять отслеживать изменение состояния компонентов пользовательского интерфейса.

```javascript
  npm install --save-dev redux-devtools-extension
```

- произведите композицию хранилища с инструментами разработчкиа redux-devtools-extension

```javascript
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
```

## Task 2. Подключение хранилища к проекту.

- установите пакет react-redux

```javascript
  npm install react-redux
```

- при помощи компонента Provider (из библиотеки react-redux), предоставьте приложению доступ к хранилищу.

```javascript
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
```

- проверьте работоспособность Вашего приложения и наличие состояния компонентов пользовательского интерфейса.

## Task 3. Создание действий (actions), которые будут обеспечивать доставку данных из компонентов в хранилище.

- в папке cart создайте файл cartActions.js в котором создайте типы действий (обычные переменные - строки), которые будут описывать действия производимые с объектом состояния корзины, а также описывать действия обработки ошибки (записи и обнуления). Произведите их экспорт.

```javascript
const ADDTOCART = "addToCart";
const REMOVEFROMCARTBYID = "removeFromCartByID";
const CREATEORDER = "createOrder";
const SETLOADER = "setLoader";
const SETERROR = "setError";
const RESETERROR = "resetError";

export {
  ADDTOCART,
  REMOVEFROMCARTBYID,
  CREATEORDER,
  SETLOADER,
  SETERROR,
  RESETERROR,
};
```

- в файле cartActions.js создайте действия (actions), которые будут возвращать объект с типом действия (свойство type) и данными, которые будут передаваться в хранилище для изменения состояния (свойство payload). Произведите их экспорт.

```javascript
const addToCart = (product) => ({ type: ADDTOCART, payload: product });
const removeFromCartByID = (id) => ({ type: REMOVEFROMCARTBYID, payload: id });
const createOrder = () => ({ type: CREATEORDER });
const setLoader = () => ({ type: SETLOADER });
const setError = (error) => ({ type: SETERROR, payload: error });
const resetError = () => ({ type: RESETERROR });

export {
  addToCart,
  removeFromCartByID,
  createOrder,
  setLoader,
  setError,
  resetError,
};
```

- произведите аналогичные действия по созданию типов и действий для продуктов в файле productsActions.js (создать в папке products)

```javascript
const SETPHONES = "getPhones";
const SETLAPTOPS = "getLaptops";
const SETLOADER = "setLoader";
const SETERROR = "setError";
const RESETERROR = "resetError";

export { SETERROR, SETLOADER, RESETERROR, SETPHONES, SETLAPTOPS };

const setLoader = () => ({ type: SETLOADER });
const setError = (error) => ({ type: SETERROR, payload: error });
const resetError = () => ({ type: RESETERROR });
const setPhones = (phones) => ({ type: SETPHONES, payload: phones });
const setLaptops = (laptops) => ({ type: SETLAPTOPS, payload: laptops });

export { setError, resetError, setLoader, setPhones, setLaptops };
```

## Task 4. Изменение состояния в хранилище в соответствии с типом действия.

- в редьюсере корзины, в соответствии с типом действия (используйте switch для выбора типа действия (свойство action.type)), измените стейт используя данные, которые приходят в объекте action (action.payload).

```javascript
import { combineReducers } from "redux";
import {
  ADDTOCART,
  REMOVEFROMCARTBYID,
  CREATEORDER,
  SETERROR,
  RESETERROR,
  SETLOADER,
} from "./cartActions";

const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTOCART:
      return [...state, action.payload];
    case REMOVEFROMCARTBYID:
      return [...state.filter((cartItem) => cartItem.id !== action.payload)];
    case CREATEORDER:
      return [];
    default:
      return state;
  }
};
const cartLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case SETLOADER:
      return !state;
    default:
      return state;
  }
};
const cartErrorReducer = (state = "", action) => {
  switch (action.type) {
    case SETERROR:
      return action.payload;
    case RESETERROR:
      return "";
    default:
      return state;
  }
};

const cartReducer = combineReducers({
  items: cartItemsReducer,
  loader: cartLoaderReducer,
  error: cartErrorReducer,
});

export default cartReducer;
```

- по аналогии с изменениями в редьюсером корзины, произведите необходимые преобразования в редьюсере продуктов.

```javascript
import { combineReducers } from "redux";
import {
  RESETERROR,
  SETERROR,
  SETLAPTOPS,
  SETLOADER,
  SETPHONES,
} from "./productsActions";

const productItemsReducer = (state = { phones: [], laptops: [] }, action) => {
  switch (action.type) {
    case SETLAPTOPS:
      return {
        ...state,
        laptops: [...action.payload],
      };
    case SETPHONES:
      return {
        ...state,
        phones: [...action.payload],
      };

    default:
      return state;
  }
};
const productsLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case SETLOADER:
      return !state;
    default:
      return state;
  }
};
const productsErrorReducer = (state = "", action) => {
  switch (action.type) {
    case SETERROR:
      return action.payload;
    case RESETERROR:
      return "";
    default:
      return state;
  }
};

const productsReducer = combineReducers({
  items: productItemsReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;
```

## Task 5. Использование действий в компонентах (пока без использования лоадеров и обработки ошибок. Эти действия будут рассмотрены во время практических занятий на использование асинхронного редакса).

- перейдите в компонент CartList.
- импортируйте из библиотеки react-redux функцию connect
- создайте функцию mapStateToProps, которая получает в параметрах state из Вашего хранилища и возвращает только необходимые для компонента слайсы (части)

```javascript
const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
  };
};
```

- создайте функцию , которая возвращает экшен-креэйтеры (action-creator который возвращает объект с типом и передаваемыми данными), с действиями, описаными в файле cartActions.

```javascript
const mapDispatchToProps = { removeFromCartByID, createOrder };
```

- оберните компонент CartList в функцию connect (по факту произведите вызов каррированой функции). В первые параметры функции передайте переменные mapStateToProps и mapDispatchToProps, а во вторые сам компонент, который получит в пропах, результат выполнения этих двух функций (в виде объекта props)

```javascript
const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
  };
};

const mapDispatchToProps = { removeFromCartByID, createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
```

- произведите необходимые манипуляции с данными, чтобы компонент стал работоспособным.

- произведите аналогичные действия с компонентом PhoneList и LaptopList:

  - для компонента LaptopList:

  ```javascript
  const mapStateToProps = (state) => {
    return {
      laptops: state.products.items.laptops,
    };
  };

  const mapDispatchToProps = { addToCart, setLaptops };

  export default connect(mapStateToProps, mapDispatchToProps)(LaptopList);
  ```

  - для компонента PhoneList:

  ```javascript
  const mapStateToProps = (state) => {
    return {
      phones: state.products.items.phones,
    };
  };

  const mapDispatchToProps = { addToCart, setPhones };

  export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
  ```

## Task 6. Получение данных с бэкенда при загрузке компонентов PhoneList и LaptopList

- переделайте компоненты PhoneList и LaptopList на классовые компоненты. Перенесите необходимую разметку.
- перенесите из компонета Main необходимые методы для загрузки данных getLaptops и getPhones. Вместо setState подставьте функцию, которая отвечает за изменение состояния в хранилище (actionCreators: setLaptops и setPhones).
- создайте метод жизненого цикла componentDidMount. Вызовите соответствующие методы getLaptops и getPhones.

  - для компонента LaptopList:

  ```javascript
  componentDidMount() {
    this.getLaptops();
  }
  getLaptops = async () => {
    const response = await getAllAdvByCategory("laptops");
    if (response) {
      const laptops = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
    }));
    this.props.setLaptops(laptops);
                   }
  };
  ```

  - для компонента PhoneList:

  ```javascript
  componentDidMount() {
    this.getPhones();
  }
  getPhones = async () => {
    const response = await getAllAdvByCategory("phones");
    if (response) {
      const phones = Object.keys(response).map((key) => ({
      id: key,
      ...response[key],
    }));
    this.props.setPhones(phones);
    }
  };
  ```

- проверьте работоспособность приложения.
