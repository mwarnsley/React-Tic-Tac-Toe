import React from 'react';

const Button = props => {
  const {btnText, name, classes, id, value, disabled, onClick, type} = props;
  return (
    <button name={name} className={classes} id={id} value={value} disabled={disabled} onClick={onClick} type={type}>
      {btnText}
    </button>
  );
};

export default Button;
