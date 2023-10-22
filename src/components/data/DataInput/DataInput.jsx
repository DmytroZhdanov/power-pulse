const DataInput = ({ type, placeholder, name, value }) => {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={name}>{value}</label>
      <input
        className="border-[1px] border-amber-500 w-[300px]"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DataInput;
