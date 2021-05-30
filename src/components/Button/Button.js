import React from 'react';
import './button.css';

const Button = ({ theme, label, ...rest }) => {
  return (
    <button className={`react-button ${theme}`}  {...rest}>
      {label}
    </button>
  )
}

export default Button;