import styled from 'styled-components';

export const UiInput = styled.input`
  background: #FFFFFF;
  border: 1px solid #CFD7DF;
  box-shadow: inset 0px 1px 2px rgba(24, 50, 71, 0.05);
  border-radius: 4px;
  font-weight: 500
  min-height: 32px;
  padding: 6px 12px;
  margin-bottom: 10px;

  :disabled {
    background: #F7F9FA;
    border: 1px solid #EBEFF3;
    cursor: not-allowed;
  }

  :focus {
    border: 2px solid #2C5CC5;
    box-shadow: inset 0px 1px 2px rgba(24, 50, 71, 0.05);
  }

  ${props => {
    return !props.invalid && `
      :hover:not([disabled]) {
        border: 1px solid #475867;
        box-shadow: inset 0px 1px 2px rgba(24, 50, 71, 0.05);
      }
    `
  }}

  ${(props) => {
    return props.invalid && `
      border: 1px solid #D72D30;
      box-shadow: inset 0px 1px 2px rgba(24, 50, 71, 0.05);
    `
  }}
`