import classnames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../store/actions';

import './Menu.scss';

export function Menu() {
  const idActivePage = useSelector((state) => state.pageActive.idActivePage);
  const menuList = useSelector((state) => state.menuList);
  const dispatch = useDispatch();

  return (
    <>
      <section className="menu">

        <ul className="menu__list">

          {
            menuList.map(item => (
              <li
                onClick={(event) => (
                  dispatch(actions.clickOnMenu(+event.currentTarget.id))
                )}
                className="menu__item"
                id={item.id}
                key={item.id}
              >

                <div
                  className={
                    classnames({
                      'menu__counter': true,
                      'menu__counter-active': item.id === idActivePage,
                    })
                  }
                >
                  <span className="menu__counter-text">{item.id}</span>
                </div>

                <p
                  className={
                    classnames({
                      'menu__item-title': true,
                      'menu__item-active': item.id === idActivePage,
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
