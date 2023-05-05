import PropTypes from "prop-types";
const MyInput = ({ type, value, onChange, placeholder, name, label }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm mt-4 text-left text-gray-700" htmlFor="name">
        {label}
      </label>
      <input
        className="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

MyInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MyInput;
