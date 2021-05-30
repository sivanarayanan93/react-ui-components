import React from 'react';
import { ButtonElement } from './StyledComponentConstants'
import { ThemeProvider } from 'styled-components';


const Button = ({ size, type, label, ...rest }) => {  
  return (
    <ThemeProvider theme={{variant: type, size}}>
      <ButtonElement {...rest}>
        {label}
      </ButtonElement>
    </ThemeProvider>
  )
}

export default Button;