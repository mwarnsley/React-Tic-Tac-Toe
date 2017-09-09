import React, {Component} from 'react';

class Button extends Component {
  render() {
    const {btnText, name, classes, id, value, disabled, onClick, type} = this.props;
    return (
      <button name={name} className={classes} id={id} value={value} disabled={disabled} onClick={onClick} type={type}>
        {btnText}
      </button>
    );
  }
}

export default Button;
