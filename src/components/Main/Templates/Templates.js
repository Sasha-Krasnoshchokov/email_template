import { EmailTemplate } from './EmailTemplate/EmailTemplate.js';
import './Templates.scss';

export function Templates() {
  return (
    <>
      <div className="templates">
        <EmailTemplate />
      </div>
    </>
  );
}
