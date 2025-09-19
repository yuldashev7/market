import React from 'react';

const CustomeButton = ({ type = 'submit', onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomeButton;
