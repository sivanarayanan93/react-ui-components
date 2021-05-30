import styled from 'styled-components';

export const RadioWrapper = styled.label`
    display: inline-flex;
    font-size: 14px;
    padding: 3px;
`;

export const UiRadio = styled.input`
  width: ${props => props.width || '14px'};
  height: ${props => props.width || '14px'};
  cursor: pointer;
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
      border: 1px solid #2C5CC5;
      width: 12px;
      height: 12px;
      display: block;
      border-radius: 50%;
    }
  }

  :checked {
    :before {
      content: '';
      border: 4px solid #2C5CC5;
      width: 6px;
      height: 6px;
      display: block;
      border-radius: 50%;
      background: #fff;
      top: 0px;
      position: relative;
      left: 0px;
    }

    :focus {
      :after {
        content: '';
        width: 10px;
        height: 10px;
        display: block;
        border-radius: 50%;
        border: 1px solid #fff;
        position: relative;
        top: -14px;
        background: transparent;
        padding: 1px;
        box-shadow: 0 0 0 1px #2c5cc5;
      }
    }
  }

  :disabled {
    background: #EBEFF3;
    border: 1px solid #CFD7DF;
    cursor: auto;
  }
`;
