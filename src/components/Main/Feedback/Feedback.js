import classnames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/actions';

import './Feedback.scss';

export function Feedback({
  isSend,
  status,
}) {
  const dispatch = useDispatch();
  console.log('feedback: ', status)
  console.log('feedbackState: ', useSelector(state => state.aboutSending.status))

  return (
    <>
      <div className={
        classnames({
          'feedback': true,
          'feedback--visible': isSend,
        })
      }
      >

        <div
          className={
            classnames({
              'feedback__status': true,
              'feedback__status--good': status,
              'feedback__status--bed': !status,
            })
          }
        />
        <p className="feedback__text">
          {
            status
              ? 'Email sent successfully!'
              : 'Failed to send email!'
          }
        </p>
        <div
          onClick={() => dispatch(actions.sendEmail(false))}
          className="feedback__cross"
        />

      </div>
    </>
  );
}
