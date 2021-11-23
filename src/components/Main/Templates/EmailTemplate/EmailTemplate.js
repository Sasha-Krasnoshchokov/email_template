// import { useState } from 'react';
import './EmailTemplate.scss';

// const defaultTemplate = {
//   recipients: '',
//   subject: '',
//   body: '',
// };

export function EmailTemplate() {
  // const [template, setTemplate] = useState(defaultTemplate);

  return (
    <>
      <div className="composeEmail">

        <h2 className="composeEmail__title">
          Compose Email Template
        </h2>

        <form className="composeEmail__form">
          <label
            className="composeEmail__label composeEmail__label-recipients"
            htmlFor="recipients"
          >
            Recipients
          </label>
          <input
            className="composeEmail__input composeEmail__input-recipients"
            id="recipients"
          />

          <label
            className="composeEmail__label composeEmail__label-subject"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="composeEmail__input composeEmail__input-subject"
            id="subject"
          />

          <label
            className="composeEmail__label composeEmail__label-body"
            htmlFor="body"
          >
            Body
          </label>
          <textarea
            className="composeEmail__input composeEmail__input-body"
            id="body"
          />

          {/* <button
            onClick={() => console.log(1)}
            className="composeEmail__button" type="button"
          >
            SET VARIABLES
          </button> */}
        </form>

      </div>
    </>
  );
}
