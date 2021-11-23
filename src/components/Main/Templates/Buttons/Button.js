
import './Button.scss';

export function Button({
  placeholder,
}) {
  return (
    <>
      <button
        onClick={() => console.log(1)}
        className="button" type="button"
      >
        {placeholder}
      </button>
    </>
  );
}
