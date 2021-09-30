# lesson5: "Life circles"

## Task 1. Динамическое изменение панели навигации в компоненте `Header`

- перепишите компонент Header на классовый комонент
- добавьте стейт с двумя значениями:
  - `width`, который будут равен текущему значению `window.innerWidth`.
  - `breakPoint`, который будет равен точке перелома для мобильного разрешения (обычно оно равно `768`) .
- напишите метод `handleResizeWindow`, который будет устанавливать новое значение стейта `width` на `window.innerWidth`
- используя метод жизненого цикла componentDidMount, добавьте слушатель на событие `"resize"`, при котором будет срабатывать метод handleResizeWindow.
- в методе жизненого цикла `componentWillUnmount`, снимите слушатель на событие `"resize"`, при котором будет срабатывает метод `handleResizeWindow`.
- измените в компоненте условие, при котором происходит перерисовка компонента, в соответсвии с внесенными измененияи.
- Убедитесь, что приложение работает корректно.

## Task 2. Создание переиспользуемого компонента `Modal`, который будет использоваться для всего проекта. Компонент ожидает в пропах разметку (children) и метод на закрытие модального окна `hideModal`

- Создайте классовый компонент `Modal`.
- Создайте стилизованый компонент-обертку `div` со следующими стилями:

```javascript
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b2;
  z-index: 1200;
  overflow: auto;

  .Modal {
    position: relative;
    background-color: #3d3d3d;
    border-radius: 14px;
    overflow: hidden;
  }

  .modalIcon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modalBtn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    fill: #504f4f;
  }
  .modalBtn:hover {
    fill: #819ff5;
  }
`;
```

- добавьте в разметку соответствующий элемент `<div className='modal'></div>`. Данный элемент будет рендерить динамическую разметку. Добавьте проп `children` внутрь него.
- напишите методы, которые отвечают за:
  - закрытие модального окна по клику на кнопку `"Escape"`. Используйте проверку `if (e.code === "Escape") {}`. Добавьте внутрь вызов метода закрытия модального окна, который приходит а пропах(`hideModal`)
  - закрытие модального окна по клику на элемент.
  - закрытие модального окна по клику на серый фон. Используйте проверку, которая предусматривает проверку, что элементом на котором произошло событие является элемент на котором оно было объявлено в методе `onClick`.

```javascript
if (e.target !== e.currentTarget) return;
```

-добавьте методы жизненого цикла, которые:

- добавляют слушателя на `"keydown"` при монтировании
- удаляют слушателя на `"keydown"` при размонтировании

## Task 3. Подключение компонета Modal в компоненте Header.

- добавьте в стейт компонента свойство isModalOpen со значение `false`, которое будет отвечать за рендер компонента `Modal` по условию. Добавьте в разметку это условие.
- создайте метод `setModalState`, который будет отвечать за изменение значение свойства isModalOpen на противоположное.
- добавьте событие `onClick` на иконку бургер-меню.

```javascript
onClick={this.setModalState}
```

- Убедитесь, что приложение работает корректно.
- Передайте в компонент Modal проп `children`. Им должен быть компонент навигации

```javascript
{
  isModalOpen && (
    <Modal hideModal={this.setModalState}>
      <HeaderList data={this.props.data} />
    </Modal>
  );
}
```

- Сделайте рефакторинг стилей в компоненте `HeaderList` так, чтобы:
  - элементы отображались в колонку.
  - выберите оптимальные размеры окна. Рекомендовано отступ как и в `header(60px)` с динамическим расчетом содержимого при помощи `calc(100vh - 60px)`. width рекомендовано сделать на всю ширину экрана.
  - добавьте другие стили на свое усмотрение.

## Task 4. Предотвращение прокрутки содержимого за компонетом Modal.

- для предотвращения прокрутки содержимого за компонентом добавьте:
  - при монтировании следующий код:

```javascript
const body = document.querySelector("body");
body.style.overflow = "hidden";
```

- при размонтировании следующий код:

```javascript
const body = document.querySelector("body");
body.style.overflow = "auto";
```
