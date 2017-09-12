import React from 'react';

const Button = ({btnText, name, classes, id, value, disabled, onClick, type}) => {
  return (
    <button name={name} className={classes} id={id} value={value} disabled={disabled} onClick={onClick} type={type}>
      {btnText}
    </button>
  );
};

export default Button;
