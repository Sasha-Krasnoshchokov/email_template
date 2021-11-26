import classnames from 'classnames';

import './Feedback.scss';

export function Feedback({
  isFeedback,
  isSentSuccess,
}) {

  setTimeout(() => {
    isFeedback = false;
  }, 5000);

  return (
    <>
      <div className={
        classnames({
          'feedback': true,
          'feedback--visible': isFeedback,
        })
      }
      >

        <div
          className={
            classnames({
              'feedback__status': true,
              'feedback__status--good': isSentSuccess,
              'feedback__status--bed': !isSentSuccess,
            })
          }
        />
        <p className="feedback__text">
          {
            isSentSuccess
              ? 'Email sent successfully!'
              : 'Failed to send email!'
          }
        </p>
        <div className="feedback__cross" />

      </div>
    </>
  );
}
