import PropTypes from 'prop-types';

import { RadioInput, TextInput } from '../DataForm/DataForm.style';

export default function DataInput({
  type,
  id,
  name,
  onChange,
  value,
  onBlur,
  placeholder,
  checked,
}) {
  return (
    <>
      {type === 'text' && (
        <TextInput
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}

      {type === 'radio' && (
        <RadioInput
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      )}
    </>
  );
}

DataInput.propTypes = {
  type: PropTypes.oneOf(['text', 'radio']).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  checked: PropTypes.bool,
};
