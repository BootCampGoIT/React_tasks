# lesson1: "Components && collections"

## Task 1. Инициализация нового проекта

- создайте на GitHub новый репозиторий под будующий проект Shop.
- склонируйте репозиторий в удобную для Вас папку на Вашем компьютере.
- инициализируйте новый проект в удобную для Вас папку на Вашем компьютере (`npx create-react-app` название_проекта).
- переместите все файлы проекта в папку с файлами `.git` из папки проекта в папку с файлами .git склонированного с GitHub. Не заменяйте файлы при копировании.
- откройте редактор кода с проектом.
- вычистите сборку следующим образом:
  - В папке public удалите все файлы кроме index.html.
  - В файле index.html удалите все содержимое.
  - Создайте базовую разметку для файла index.html при помощи EMET.
  - Добавьте в тег body следующий контент: <div id="root"></div> (или используя EMMET - #root).
  - В папке src удалите все файлы кроме двух файлов: `index.js` и `index.css`
  - Приведите содержимое файла `index.js` к следующему виду:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
```

- В папке src создайте папку Components c файлом `App.js`. Используйте быструю комбинацию команд. Для этого нажмите на пиктограмму создания файла и введите следующую команду: `Components/App.js`
- В созданном файле создайте функциональный компонент со следующей структурой:

```javascript
import React from "react";

const App = () => {
  return <h2>Hello Shop</h2>;
};

export default App;
```

- В файле `index.js` при помощи расширения `Auto Import` заимпортируйте файл `App.js`

```javascript
import App from "./Components/App";
```

- Откройте новый терминал. В командной строке введите команду: `npm start`;
- Удостоверьтесь, что сборка работает корректно, данные отображаются в браузере, ошибок в терминале нет.

## Task 2. Создание данных для работы с проектом.

- в папке `src` (на уровне с папкой `Components`) создайте папку `data`, а в ней файл `index.js`.
- создайте файл `phones.json` в папке `data`.
- Добавьте в файл phones.json следующие данные:

```json
[
  {
    "id": "20491182",
    "name": "Samsung Galaxy A51 6/128GB Blue (SM-A515FZBWSEK)",
    "image": "https://content1.rozetka.com.ua/goods/images/big/20491182.jpg",
    "description": "Екран (6.5', Super AMOLED, 2400x1080) / Samsung Exynos 9611 (2.3 ГГц + 1.7 ГГц) / основна квадрокамера: 48 Мп + 12 Мп + 5 Мп + 5 Мп, фронтальна 32 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам'яті + microSD (до 512 ГБ) / 3G / LTE / GPS / підтримка 2 SIM-карток (Nano-SIM) / Android 10.0 (Q) / 4000 мА·год",
    "colors": ["black", "blue", "white", "grey"],
    "price": 7299,
    "isSale": true
  },
  {
    "id": "163417728",
    "name": "Xiaomi Redmi 9T 4/128 Carbon Gray (749702)",
    "image": "https://content.rozetka.com.ua/goods/images/big/163417728.jpg",
    "description": "Екран (6.53', 2340x1080) / Qualcomm Snapdragon 662 (4 х 2.0 ГГц + 4 х 1.8 ГГц) / основна квадрокамера: 48 Мп + 8 Мп + 2 Мп + 2 Мп, фронтальна 8 Мп / RAM 4 ГБ / 128 ГБ вбудованої пам'яті + microSD (до 512 ГБ) / 3G / LTE / GPS / A-GPS / ГЛОНАСС / BDS / підтримка 2 SIM-карток (Nano-SIM) / Android 10 (Q) / 6000 мА·год",
    "colors": ["grey", "blue", "green", "red"],
    "price": 5499,
    "isSale": false
  },
  {
    "id": "163416521",
    "name": "Xiaomi Redmi 9T 4/64 Carbon Gray (749698)",
    "image": "https://content2.rozetka.com.ua/goods/images/big/163416521.jpg",
    "description": "Екран (6.53', 2340x1080) / Qualcomm Snapdragon 662 (4 х 2.0 ГГц + 4 х 1.8 ГГц) / основна квадрокамера: 48 Мп + 8 Мп + 2 Мп + 2 Мп, фронтальна 8 Мп / RAM 4 ГБ / 64 ГБ вбудованої пам'яті + microSD (до 512 ГБ) / 3G / LTE / GPS / A-GPS / ГЛОНАСС / BDS / підтримка 2 SIM-карток (Nano-SIM) / Android 10 (Q) / 6000 мА·год",
    "colors": ["grey", "blue", "red"],
    "price": 4799,
    "isSale": true
  }
]
```

- создайте файл `laptops.json` в папке `data`.
- Добавьте в файл `laptops.json` следующие данные:

```json
[
  {
    "id": "27122440",
    "name": "Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black",
    "image": "https://content.rozetka.com.ua/goods/images/big/27122440.jpg",
    "description": "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
    "price": 24999,
    "isSale": false
  },
  {
    "id": "180782890",
    "name": "Asus ROG Strix G17 G713QE-HX023 (90NR05F2-M00630) Eclipse Gray",
    "image": "https://content1.rozetka.com.ua/goods/images/big/180782890.jpg",
    "description": "Екран 17.3' IPS (1920x1080) Full HD 144 Гц, матовий / AMD Ryzen 5 5600H (3.3 — 4.2 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.4 кг / темно-сірий",
    "price": 32999,
    "isSale": true
  },
  {
    "id": "174538382",
    "name": "HP Pavilion 15-eh0005ua (34Q67EA) Silver",
    "image": "https://content2.rozetka.com.ua/goods/images/big/174538382.jpg",
    "description": "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 4500U (2.3 — 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / AMD Radeon Graphics / без ОД / Wi-Fi / Bluetooth / вебкамера / DOS / 1.75 кг / сріблястий",
    "price": 17777,
    "isSale": false
  }
]
```

- создайте файл `header.json` в папке data.
- Добавьте в файл `header.json` следующие данные:

```javascript
["home", "phones", "laptops", "registration", "login"];
```

- Сделайте импорт файлов `header.json`, `laptops.json` и `phones.json` в файле `index.js`.
- Инициализируте переменную `data` в файле `index.js` (папка `data`) которая будет объектом со свойствами `laptops` и `phones`.
- Сделайте дефолтный экспорт объекта `data`;
- Содержимое файла `index.js` должно быть приведено к следующему виду:

```javascript
import laptops from "./laptops.json";
import phones from "./phones.json";
import header from "./header.json";

const data = { laptops, phones, header };

export default data;
```

## Task 3. Создание структуры проекта.

- в папке Components создайте папки `header` и `main` с функциональными компонентами `Header.js` и `Main.js` соответственно внутри них.

- Содержимое компонента `Header.js` должно иметь следующий вид:

```javascript
import React from "react";

const Header = () => {
  return <h2>Header</h2>;
};

export default Header;
```

- Содержимое компонента `Main.js` должно иметь следующий вид:

```javascript
import React from "react";

const Main = () => {
  return <h2>Main</h2>;
};

export default Main;
```

- Поместите созданные компоненты `Header` и `Main` в файле `App.js`. Используте возможности расширения `Auto Import`.
- Содержимое файла `App.js` должно иметь следующий вид:

```javascript
import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
```

- Удостоверьтесь, что данные отображаются в браузере, ошибок в терминале нет.

## Task 4. Создание компонента HeaderList.

- В папке `header`, на уровне с файлом `Header.js`, создайте папку headerList с функциональным компонентом `HeaderList.js` внутри.
- Произведите импорт данных из файла `index.js` (располагается в папке data).
- Добавьте в компонент элемент списка `(<ul></ul>)`
- Внутри элемента списка, путем перебора элементов объекта data, отрендерить коллекцию однотипных элементов, используется метод Array.prototype.map(), callback-функция которого, для каждого элемента коллекции, возвращает JSX-разметку.
- Содержимое компонента `HeaderList.js` должно иметь следующий вид:

```javascript
import React from "react";
import data from "../../../data";

const HeaderList = () => {
  return (
    <ul>
      {data.header.map((headerItem) => (
        <li key={headerItem}>{headerItem}</li>
      ))}
    </ul>
  );
};

export default HeaderList;
```

- Подключите компонент `HeaderList` в файле `Header.js`
- Содержимое компонента `Header.js` должно иметь следующий вид:

```javascript
import React from "react";
import HeaderList from "./headerList/HeaderList";

const Header = () => {
  return (
    <>
      <HeaderList />
    </>
  );
};

export default Header;
```

- Удостоверьтесь, что данные отображаются в браузере, ошибок в терминале нет.

## Task 5. Создание компонентов PhoneList и PhoneListItem.

- В папке `Сomponents` создайте папку `phoneList` с функциональным компонентом `PhoneList.js` внутри.
- Добавьте в компонент элемент списка (<ul></ul>)
- В компоненте `Main` вствьте компонент `PhoneList.js`.
- Произведите импорт данных из файла `index.js` (располагается в папке data) и передайте в компонент `PhoneList.js` проп phones, который будет соответствовать массиву, который содержится в свойстве `phones` импортированного объекта.
- Содержимое компонента `Main.js` должно иметь следующий вид:

```javascript
import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";

const Main = () => {
  return (
    <>
      <PhoneList phones={data.phones} />
    </>
  );
};

export default Main;
```

- Содержимое компонента `PhoneList.js` должно иметь следующий вид:

```javascript
import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";

const PhoneList = ({ phones }) => {
  return (
    <ul>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} />
      ))}
    </ul>
  );
};

export default PhoneList;
```

- В папке `PhoneList` создайте папку `phoneListItem` с функциональным компонентом `PhoneListItem.js` внутри.
- Создайте внутри компонента `PhoneListItem` разметку (шаблон), которая будет соответствовать данным одного элемента массива `phones` (данные располагаются внутри объекта data в свойтсве phones). Компонент принимает в себя деструктуризированное значение объекта props - phone ({phone}) Внутри элемента списка цветов, путем перебора элементов объекта data, отрендерить коллекцию однотипных элементов, используется метод `Array.prototype.map()`, callback-функция которого, для каждого элемента коллекции, возвращает JSX-разметку. Добавьте соответствующие ключи.
- Содержимое компонента `PhoneListItem.js` должно иметь следующий вид:

```javascript
import React from "react";

const PhoneListItem = ({ phone }) => {
  return (
    <li>
      <h3>{phone.name}</h3>
      <img src={phone.image} alt={phone.name} />
      <p>
        Sale:{" "}
        {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}
      </p>
      <p>{phone.description}</p>
      <ul>
        {phone.colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <p>
        Цена: <span>{phone.price}</span>
      </p>
    </li>
  );
};

export default PhoneListItem;
```

- Удостоверьтесь, что данные отображаются в браузере, ошибок в терминале нет.

## Task 6. Произведите аналогичные действия по созданию и ренедеру коллекции элементов для массива laptops из объекта data. Компонент списка целесообразно назвать LaptopList.

## Task 7. Создание компонента-обертки с заголовками для компонентов PhoneList и LaptopList (практика на использование свойства props.children).

- В папке `Components` cоздайте функциональный компонент `Section`.
- В параметрах компонента, из объекта `props`, деструктуризируйте пропы `children` и `title`
- В разметке, возвраемой компонентом, добавьте заголовок второго уровня, который отображает содержимое пропа `title` в верхнем регистре.
- Добавьте содержимое пропа `children` в разметку.
- Содержимое компонента `Section.js` должно иметь следующий вид:

```javascript
import React from "react";

const Section = ({ children, title }) => {
  return (
    <>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </>
  );
};

export default Section;
```

- Компоненты списков (`PhoneList` и `LaptopList`), которые рендерятся в компоненте `Main`, оберните в компонент Section. Передайте в компонент `Section`, пропы title -"Мобильные телефоны" и "Ноутбуки", в соответствующие компоненты
