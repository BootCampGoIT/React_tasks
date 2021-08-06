# lesson: "Async redux";

## 1. Создание операций для работы с продуктами

- в папке products (находится в папке `redux`) создайте файл `productsOperations.js`
- создайте асинхронню функцию - операцию `getAllAdvByCategoryOperation`, которая принимает входящим параметром категорию:

Пример:

```javascript
export const getAllAdvByCategoryOperation =
  async (category) => async (dispatch) => {};
```

- из имеющихся функций, предназначенных для работы с запросами (`services/api.js`) импортируйте функцию `getAllAdvByCategory(category)`

- используя конструкцию `try/cath` выполните запрос на сервер по указанной категории. Проверьте данные, которые приходят в ответ.

- выполните преобразование данных.

Пример:

```javascript
export const getAllAdvByCategoryOperation = (category) => async (dispatch) => {
  try {
    const response = await getAllAdvByCategory(category);
    if (response) {
      const products = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
    }
  } catch (error) {
    console.log(error);
  }
};
```

- Исходя из того, что данная операция будет универсальной, необходимо создать функцию, которая по выбранной категории будет вызывать `(dispatch)` соответствующий `action`, отвечающий за запись данных в глобальный стейт.

Пример:

```javascript
const getAction = (category, products, dispatch) => {
  if (category === "phones") {
    dispatch(setPhones(products));
  }
  if (category === "laptops") {
    dispatch(setLaptops(products));
  }
};
```

- В компоненте `PhoneList`, в функции `mapDispatchToProps` передайте в компонент созданную операцию `getAllAdvByCategoryOperation` (предварительно произведите ее импорт)

- вызовите функцию, полученную в объекте пропс, в методе жизненного цикла при монтировании компонента

Пример:

```javascript
  componentDidMount() {
  this.props.getAllAdvByCategoryOperation("phones");
  }
```

- Проверьте работоспособность приложения

- Произведите аналогичные действия для компонента `LaptopList`

## 2. Работа с индикатором загрузки

- в созданной операции `getAllAdvByCategoryOperation` произведите следующие действия:
  - добавьте перед запросом на получение продукта (до конструкции `try/catch`), экшен, который отвечает за изменение состояния лоадера продуктов (индикатор начала загрузки)
  - в `finally` добавьте экшен, который отвечает за изменение состояния лоадера продуктов (индикатор окончания загрузки)

## 3. Работа с ошибкой

- в созданной операции `getAllAdvByCategoryOperation` (в `catch`) добавьте экшен, который отвечает за изменение состояния ошибки. Установите ошибку `dispatch(setError(error.message))`;
