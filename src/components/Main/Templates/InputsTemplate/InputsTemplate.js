
import './InputsTemplate.scss';

export function InputsTemplate({
  placeholder,
}) {
  return (
    <>
      <label
        className="inputsTemplate__label"
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        className="inputsTemplate__input"
        id={placeholder}
      />
    </>
  );
}
