import axios from 'axios';

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

  const subject = useSelector(state => state.placeholders[1].text);
  const emailToSend = useSelector(state => state.bodyEmail.cleanText);

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

      axios.post('https://mock.at.leanylabs.com/email', {
        'to': "hr@leanylabs.com",
        'subject': subject,
        'body': emailToSend,
      })
      .then(function (response) {
        console.log(response);
        // dispatch(actions.sendingStatus(true));
        setTimeout(() => {
          console.log('This will run after 5 second!')
          dispatch(actions.sendingStatus(true));
          dispatch(actions.sendEmail(true));
        }, 0);
        // dispatch(actions.sendEmail(true));
      })
      .catch(function (error) {
        console.log(error);
        console.log('not send');
        setTimeout(() => {
          console.log('This will run after 5 second!')
          dispatch(actions.sendEmail(true));
        }, 0);
        // dispatch(actions.sendEmail(true));
      });
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
