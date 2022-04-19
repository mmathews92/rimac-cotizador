import PropTypes from 'prop-types';
import './Input.scss';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  id,
  maxLength,
  ariaLabel,
  pattern,
  required,
  floating,
  classes,
  ...rest
}) => (
  floating
    ? (
      <div className="form-floating">
        <input
          {...rest}
          type={type}
          className={`form-control ${classes}`}
          id={id}
          placeholder={placeholder}
          aria-label={label || ariaLabel}
          maxLength={maxLength}
          pattern={pattern}
          required={required}
        />
        {label && <label className="label" htmlFor={id}>{label}</label>}
      </div>
    )
    : (
      <>
        <input
          {...rest}
          type={type}
          className={`form-control ${classes}`}
          id={id}
          placeholder={placeholder}
          aria-label={label || ariaLabel}
          maxLength={maxLength}
          pattern={pattern}
          required={required}
        />
        {label && <label className="label" htmlFor={id}>{label}</label>}
      </>
    )
);

export default InputField;

InputField.defaultProps = {
  label: null,
  placeholder: '',
  maxLength: undefined,
  pattern: null,
  ariaLabel: null,
  floating: true,
  classes: '',
  required: false,
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  ariaLabel: PropTypes.string,
  pattern: PropTypes.string,
  classes: PropTypes.string,
  required: PropTypes.bool,
  floating: PropTypes.bool,
};
