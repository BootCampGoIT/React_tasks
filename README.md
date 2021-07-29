# lesson5: `"React Router"`

## Task 1. Подключение библиотеки `react-router-dom` в проект

- установите пакет `react-router-dom`
- в файле index.js (в папке src), оберните весь проект в компонент `<BrowserRouter>`.

## Task 2. Создание страниц навигации

- Создайте в папке src папку `pages`, а в ней компоненты `HomePage`, `ProductsPage`, `CartPage`, `AdminPage`, `ProfilePage` и `AuthPage`.
- Содержимым компонентов пусть, будет разметка из объекта `Main` по соответствующим компонентам (перенесите их). Выполните соответствующие импорты и произведите рефакторинг пропов. Пока содержимое компонетов `Section` закоментируйте

## Task 3. Создание массива объектов навигации

- создайте в папке `src` папку routes, а в ней файл `mainRoutes.js`.
- добавьте в файл массив объектов `mainRoutes`.

```javascript
export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    name: "Products",
    path: "/products",
    component: ProductsPage,
    exact: false,
  },
  {
    name: "Cart",
    path: "/cart",
    component: CartPage,
    exact: false,
  },
  {
    name: "Administration",
    path: "/admin",
    component: AdminPage,
    exact: false,
  },
  {
    name: "Registration",
    path: "/registration",
    component: AuthPage,
    exact: false,
  },
  {
    name: "Login",
    path: "/login",
    component: AuthPage,
    exact: false,
  },
];
```

- Произведите импорт соответствующих компонентов.

## Task 4. Создание маршрутизации в объекте `HeaderList`

- выполните рефакторинг компонента `HeaderList` заменив anchor на компонент NavLink. Добавьте классы и активные классы. Используйте массив mainRoutes для создания навигации.
- проверьте работоспособность проекта и правильную работу элемнтов навигации.
- удалите папку `data`.

## Task 5. Рефакторинг компонента `Main`. Привязка `URL` и компонета для рендера

- в компоненте `main`, используя массив `mainRoutes`, выполните рефакторинг так, чтобы компонент позволял связать определенный URL и компоненты для рендера. Для этого создайте обертку (Switch) и в ней компоненты Route.

```javascript
<MainContainer>
  <Switch>
    {mainRoutes.map(({ path, exact, component }) => (
      <Route path={path} exact={exact} component={component} />
    ))}
  </Switch>
</MainContainer>
```

- проверьте работоспособность проекта и правильную работу элемнтов навигации.

## Task 6. Создание вложенной навигации компонета `Products`

- в папке routes создайте файл `productsRoutes.js`.

```javascript
export const productsRoutes = [
  {
    name: "Phones",
    path: "/phones",
    component: PhoneList,
    exact: true,
  },
  {
    name: "Laptops",
    path: "/laptops",
    component: LaptopList,
    exact: true,
  },
];
```

- в компонете ProductsPage, путем перебора массива productsRoutes добавьте компонеты Navlink.
- проверьте работоспособность проекта и правильную работу элементов навигации.
