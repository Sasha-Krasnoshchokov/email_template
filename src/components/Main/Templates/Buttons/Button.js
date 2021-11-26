import classnames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/actions';

import './Button.scss';

export function Button({
  buttonName,
  isChangeEmailBody,
  setIsChangeEmailBody,
}) {
  const dispatch = useDispatch();
  const dirtyText = useSelector(state => state.bodyEmail.dirtyText);

  const userPressed = (name) => {
    name === 'BACK' && dispatch(actions.back());

    if (name !== 'BACK' && name !== 'SEND') {
      dispatch(actions.next());
      dispatch(actions.fillCleanEmailText());
      dispatch(actions.createEmail());
    }

    if (name === 'SET VARIABLES' && isChangeEmailBody) {
      let placeholders = [];
      dirtyText
        .match(/{\w+}/g)
        .forEach(item => {
          if (placeholders.indexOf(item) < 0) {
            placeholders.push(item);
          }
        });

        placeholders.forEach(item => {
          item !== '{subject}' && dispatch(actions.addPlaceholder(item))
        });

      setIsChangeEmailBody(false);
    }

    if (name === 'SEND') {
      
    }
  };

  return (
    <>
      <button
          onClick={(event) => userPressed(event.target.innerText)}
          className={
            classnames({
              'button': true,
              'button--gray': buttonName === 'BACK'
            })
          }
          type="button"
        >
          {buttonName}
        </button>
    </>
  );
}