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
