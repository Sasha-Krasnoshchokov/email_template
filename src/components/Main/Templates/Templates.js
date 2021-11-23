import classnames from 'classnames';

import { Button } from './Buttons/Button.js';
import { EmailTemplate } from './EmailTemplate/EmailTemplate.js';
// import { InputsTemplate } from './InputsTemplate/InputsTemplate.js';
import './Templates.scss';

export function Templates() {
  return (
    <>
      <div className="templates">
        <EmailTemplate />

        {/* <InputsTemplate placeholder={'Name'} /> */}

        <div className={
          classnames({
            'templates__button': false,
            'templates__buttons': true,
          })
        }>
          <Button placeholder={'Name'} />
          <Button placeholder={'Name'} />
        </div>
      </div>
    </>
  );
}
