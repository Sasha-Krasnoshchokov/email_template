import { useState } from 'react';
import classnames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/actions';

import { Button } from '../Buttons/Button';

import './EmailTemplate.scss';

export function EmailTemplate() {
  const [isChangeEmailBody, setIsChangeEmailBody] = useState(false);
  const [variable, setVariable] = useState('');
  const idActivePage = useSelector((state) => state.pageActive.idActivePage);
  const dirtyEmail = useSelector((state) => state.bodyEmail.dirtyText);
  const cleanEmail = useSelector((state) => state.bodyEmail.cleanText);

  const dispatch = useDispatch();

  const inputtingEmailBody = (text) => {
    setIsChangeEmailBody(true);
    dispatch(actions.clearPlaceholders());

    const char = text.charAt(text.length-1);

    const isLetter = (char.toUpperCase() !== char.toLowerCase());

    !variable && dispatch(actions.fillEmailBody(text));

    if (char === '{') {
      setVariable(char);
    }

    if (char === '}' && variable.length > 1) {
      dispatch(actions.fillEmailBody(text));
      setVariable('');
    }

    if ((variable && isLetter) || char === '{') {
      setIsChangeEmailBody(false);
      dispatch(actions.fillEmailBody(text));
      setVariable(variable + char);
    }
  };

  const describeVariable = (event) => {
    dispatch(
      actions.fillPlaceholder((+event.target.id), event.target.value)
    );
  };

  return (
    <>
      <div
        className={
          classnames({
            'composeEmail': idActivePage === 1,
            'composeEmail-prev': idActivePage === 3,
          })
        }
      >

        <h2
          className={
            classnames({
              'composeEmail__title-email': idActivePage === 1,
              'composeEmail__title-prev': idActivePage === 3,
            })
          }
        >
          {
            idActivePage === 1
              ? 'Compose Email Template'
              : 'Preview and Send'
          }
        </h2>

        <form className="composeEmail__form">
          <label
            className="composeEmail__label composeEmail__label-recipients"
            htmlFor={useSelector((state) => state.placeholders[0].id)}
          >
            {useSelector((state) => state.placeholders[0].title)}
          </label>

          <input
            onChange={(event) => describeVariable(event)}
            value={useSelector((state) => state.placeholders[0].text)}
            placeholder={useSelector((state) => state.placeholders[0].name)}
            className="composeEmail__input composeEmail__input-recipients"
            id={useSelector((state) => state.placeholders[0].id)}
          />

          <label
            className="composeEmail__label composeEmail__label-subject"
            htmlFor={useSelector((state) => state.placeholders[1].id)}
          >
            {useSelector((state) => state.placeholders[1].title)}
          </label>

          <input
            onChange={(event) => describeVariable(event)}
            value={useSelector((state) => state.placeholders[1].text)}
            placeholder={useSelector((state) => state.placeholders[1].name)}
            className="composeEmail__input composeEmail__input-subject"
            id={useSelector((state) => state.placeholders[1].id)}
          />

          <label
            className="composeEmail__label composeEmail__label-body"
            htmlFor="body"
          >
            {useSelector((state) => state.bodyEmail.name)}
          </label>

          {
            idActivePage === 1
              ?
                <textarea
                  onChange={(event) => inputtingEmailBody(event.target.value)}
                  value={ idActivePage === 1 ? dirtyEmail : cleanEmail }
                  className="composeEmail__input composeEmail__input-body"
                  id="body"
                />
              :
                <>
                  <textarea
                    placeholder='{enter your email template}'
                    value={ idActivePage === 1 ? dirtyEmail : cleanEmail }
                    className="composeEmail__input composeEmail__input-body"
                    id="body"
                  />
                  <span className="composeEmail__warning">
                    This lield you can correct only on *Compose Email Template* page!
                  </span>
                </>
          }
          

          <div role="button"
            className={
              classnames({
                'button__wrap': true,
                'button__wrap-2': idActivePage === 3,
              })
            }
          >
            {
              idActivePage === 1
                ?
                  <Button
                    buttonName={'SET VARIABLES'}
                    selectedId={idActivePage}
                    isChangeEmailBody={isChangeEmailBody}
                    setIsChangeEmailBody={setIsChangeEmailBody}
                  />
                :
                  <>
                    <Button
                      buttonName={'BACK'}
                      selectedId={idActivePage}
                    />
                    <Button
                      buttonName={'SEND'}
                      selectedId={idActivePage}
                    />
                  </>
            }
          </div>

        </form>

      </div>
    </>
  );
}
