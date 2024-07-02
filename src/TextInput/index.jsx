const TextInput = ({ label, value, onChange, type }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-left text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={label}
        type={type ? type : "text"}
        maxLength={3}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
