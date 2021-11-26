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

  const url = useSelector(state => state.placeholders[0].text);
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
      if (dirtyText.indexOf('{') >= 0 && dirtyText.indexOf('}') >= 0) {
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
      }

      setIsChangeEmailBody(false);
    }

    if (name === 'SEND') {
      if (url && subject) {
        axios.post('https://mock.at.leanylabs.com/email', {
          'to': "hr@leanylabs.com",
          'subject': subject,
          'body': emailToSend,
        })
        .then(function (response) {
            dispatch(actions.sendingStatus(true));
            if (response.status >= 200 && response.status <= 300) {
            dispatch(actions.sendEmail(true));
            }
        })
        .catch(function (error) { 
          console.log(error);
          dispatch(actions.sendingStatus(false));
          dispatch(actions.sendEmail(true));
        });
      } else {
        window.alert('Please, fill {Recipient} and {Subject}!')
      }
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
