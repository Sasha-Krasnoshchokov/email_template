import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/actions';

import { Button } from '../Buttons/Button';
import './InputsTemplate.scss';

export function InputsTemplate({
  selectedId,
  pressButton,
}) {
  const placeholders = useSelector((state) => state.placeholders);
  const dispatch = useDispatch();

  const describeVariable = (event) => {
    dispatch(
      actions.fillPlaceholder((+event.target.id), event.target.value)
    );
  };

  return (
    <>
      <section className="inputsTemplate">
        <h2 className="inputsTemplate__title">
          Set Values
        </h2>

        <div className="inputsTemplate--wrap">
          {
            placeholders.map(item => (
              <div key={item.id}>
                <label
                  className="inputsTemplate__label"
                  htmlFor={item.id}
                >
                  {item.name}
                </label>
                <input
                  onChange={(event) => describeVariable(event)}
                  value={item.text}
                  className="inputsTemplate__input"
                  data={item.name}
                  id={item.id}
                />
              </div>
            ))
          }
        </div>

        <div role="button"
          className="button__wrap button__wrap-2"
        >
          <Button
            buttonName={'BACK'}
            selectedId={selectedId}
            pressButton={pressButton}
          />
          <Button
            buttonName={'NEXT'}
            selectedId={selectedId}
            pressButton={pressButton}
          />
        </div>
      </section>
    </>
  );
}
