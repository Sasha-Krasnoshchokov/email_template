
import { EmailTemplate } from './EmailTemplate/EmailTemplate.js';
import { InputsTemplate } from './InputsTemplate/InputsTemplate.js';

import { useSelector } from 'react-redux';

import './Templates.scss';

export function Templates() {
  const idActivePage = useSelector((state) => state.pageActive.idActivePage);

  return (
    <>
      <div className="templates">
        {
          idActivePage !== 2
          &&
          <EmailTemplate />
        }

        {
          idActivePage === 2
          &&
          <InputsTemplate
            idActivePage={idActivePage}
          />
        }

      </div>
    </>
  );
}
