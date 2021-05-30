import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
    display: inline-flex;
    font-size: 14px;
    padding: 3px;
`;

export const UiCheckbox = styled.input`
  width: ${props => props.width || '14px'};
  height: ${props => props.width || '14px'};
  border: 1px solid #475867;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(24, 50, 71, 0.05);
  border-radius: 2px;
  margin: 0 5px 0 0;
  padding: 0;
  outline: none;

  :hover {
    background: #EBEFF3;
    box-shadow: 0px 0px 1px 3px #ebeff3;
  }

  :focus {
    :before {
      content: '';
      width: ${props => props.width && `calc(${props.width} - 2px)` || '12px'};
      height: ${props => props.width && `calc(${props.width} - 2px)` || '12px'};;
      position: relative;
      border: 1px solid #2C5CC5;
      display: block;
      border-radius: 2px;
    }
  }

  :checked {
    :focus {
      :before {
        content: '';
        box-shadow: 0 0 0 1px #2C5CC5;
        border-color: #fff;
        color: #fff;
      }
    }    
  }

  :disabled {
    background: #EBEFF3;
    border: 1px solid #CFD7DF;
  }
`;
