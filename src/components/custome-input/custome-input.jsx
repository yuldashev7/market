import React from 'react';

const CustomeInput = ({
  label,
  type = 'search',
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CustomeInput;
