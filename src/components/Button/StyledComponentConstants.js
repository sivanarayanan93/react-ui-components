import styled from 'styled-components';
import { ButtonThemes, sizes } from './ThemeConstants'; 

const inputHeight = sizes.inputHeight

export const ButtonElement = styled.button`
  font-size: 14px;
  vertical-align: middle;
  line-height: 1.2;
  margin-right: 10px;
  padding: 6px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: 0;
  color: #264966;
  cursor: pointer;
  transition: all 0.2s linear;
  letter-spacing: 0.3px;
  font-weight: 500;
  margin-bottom: 10px;

  ${(props) => {
    let base = ButtonThemes.base,
        {variant, size} = props.theme,
        theme = ButtonThemes && variant && ButtonThemes[variant] || ButtonThemes.primary;

    return theme && `
      background-color: ${theme.backgroundColor};
      color: ${theme.color};
      border: ${theme.border};
      background-image: ${theme.backgroundImage};
      height: ${inputHeight[size] || '32px'};

      :hover {
        background-color: ${theme.hover.backgroundColor};
        background-image: none;
      }

      :active {
        border: ${theme.active && theme.active.border || 'inherit'};
        boxShadow: "inset 0 0 4px 0 rgb(0 0 0 / 25%)";
      }

      :focus {
        border: ${base.focus.border};
        boxShadow: ${base.focus.boxShadow};
        outline: none;
      }


      :disabled {
        border: ${theme.disabled.border};
        color: ${theme.disabled.color};
        cursor: not-allowed;
        background-image: ${theme.disabled.backgroundImage};
      }
    `
  }}
`


