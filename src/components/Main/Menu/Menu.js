import { useState } from 'react';
import classnames from 'classnames';

import './Menu.scss';

const defaultMenuList = [
  {
    id: 1,
    title: 'Compose Email Template',
    active: true,
    X: 1,
  },
  {
    id: 2,
    title: 'Set Values',
    active: false,
    x: 1,
  },
  {
    id: 3,
    title: 'Preview & Send',
    active: false,
    x: 1,
  },
];

export function Menu() {
  const [menuList, setMenuList] = useState(defaultMenuList);

  const selection = (id) => {
    setMenuList(
      menuList.map(item => {
        (item.id === +id)
          ? item.active = true
          : item.active = false
        return item;
      })
    );
  };

  return (
    <>
      <section className="menu">

        <ul className="menu__list">
          {
            menuList.map(item => (
              <li
                onClick={(event) => selection(event.currentTarget.id)}
                className="menu__item"
                id={item.id}
                key={item.id}
              >
                <div
                  className={
                    classnames({
                      'menu__counter': true,
                      'menu__counter-active': item.active,
                    })
                  }
                >
                  <span className="menu__counter-text">{item.id}</span>
                </div>
                <p
                  className={
                    classnames({
                      'menu__item-title': true,
                      'menu__item-active': item.active,
                    })
                  }
                >
                  {item.title}
                </p>
              </li>
            ))
          }
        </ul>

      </section>
    </>
  );
}
