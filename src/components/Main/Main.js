
import './Main.scss';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions';

import { Menu } from './Menu/Menu';
import { Templates } from './Templates/Templates';
import { Feedback } from './Feedback/Feedback';
import { useEffect } from 'react';

export function Main() {
  const dispatch = useDispatch();
  const isSend = useSelector(state => state.aboutSending.isSend);
  const status = useSelector(state => state.aboutSending.status);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actions.sendEmail(false));
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSend]);

  return (
    <>
      <main className="main">

        <Menu />

        <Templates />

        <Feedback
          isSend={isSend}
          status={status}
        />

      </main>
    </>
  );
}
