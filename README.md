## Task 1. Добавление функционала компоненту Main. Рефакторинг компонентов `PhoneListItem` и `LaptopListItem`

Компонент `Main`, помимо того, что он будет рендерить базовую разметку, будет отвечать за возможность добавления товаров в корзину и удаления из нее товаров, которые выберет пользователь.

- произвести рефакторинг функционального компонента Main на классовый компонент.
- добавить в компоненте `Main` объект состояния, который будет иметь следующую структуру:

```javascript
state = {
  cart: [],
};
```

- написать методы, которые будут отвечать за:
  - `добавление товара в корзину (массив cart)`.Метод целессобразно назвать `addToCart`. Товары - объекты, которые будет добавлять пользователь при клике на кнопку "Добавить в корзину", которая будет расположена на карточке товара;
  - `удаление одного товара из корзины`. Метод целессобразно назвать `removeFromCartByID`.Удаление будет осуществляться по клику на пиктограмму, которая будет располагатья в списке товаров компонента Cart;
  - `удаление всех товаров из корзины`. Метод целессобразно назвать `removeAllFromCart`.
- передать компонентам `PhoneListItem` и `LaptopListItem` метод `addToCart`.
- добавить в компонентах `PhoneListItem` и `LaptopListItem` кнопку добавления товара. (Исключить использование анонимных колбэков). По событию `onClick` осуществлять добавление товара в корзину (вызов функции добаления товара, которая передана в пропах)

## Task 2. Создание компонентов СartList и CartListItem

- создайте функциональный компонент `CartList`, который будет получать в пропах массив объектов cart.
- создайте элемент списка, в котором будет осуществляться перебор элементов списка `cart`, а отдельные элементы будут передаваться в компонент `СartListItem`.
- Создайте функциональный компонент `CartListItem`. Компонент должен выводить название товара и его цену, а также обладать пиктограммой, которая отвечает за удаление товара.
- Подключите компонент `СartList` в компоненте Main.
- Передайте элементу `CartListItem` метод на удаление товара.
- Добавьте в компоненте `CartListItem` событие на пиктограмму удаления товара с использованием соответствующего метода
- Добавьте функционал подсчета общей стоимости товаров и их количества в компоненте `CartList`.
- Добавьте в компоненте `CartList` кнопку `"Оформить заказ"`. По клику на кнопку вызывать метод, который осуществляет удаление всех товаров из корзины.
- Если товаров в корзине нет - выводите сообщение `"Добавьте товары в корзину"`. При этом кнопка `"Оформить заказ"` тоже не показывается.
