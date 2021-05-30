import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  width: 150px;
`

export const DropdownButton = styled.button`
  background: #fff;
  cursor: pointer;
  height: 32px;
  font-weight: 600;
  color: rgb(24, 50, 71);
  border: 1px solid #ccc;
  border-radius: 4px; 
  width: inherit;
  height: inherit;
  text-align: left;
  padding: 8px 10px;
`

export const DropdownMenu = styled.ul`
  border: 1px solid #ccc;
  position: absolute;
  border-radius: 4px;
  background: #fff;
  width: inherit;
  margin-top: 4px;
  border-radius: 8px;
  padding: 0;
  max-height: 150px;
  overflow-y: scroll;
  
`

export const DropdownMenuItem = styled.li`
  cursor: pointer;
  margin: 4px 10px 4px 10px;
  padding: 8px 12px;
  list-style: none;
  border-radius: 4px;
  font-family: Arial;
  font-size: 14px;

  a {
    color: ${props => props.selected ? 'rgb(44, 92, 197)' : 'rgb(24, 50, 71)'};
    ${props => props.selected && `font-weight: 600`}
  }

  ${props => props.isDisabled && `
    pointer-events: none;
    opacity: .6;
  `}

  :hover {
    background-color: #e1e2e6;
  }

  span {
    color: rgb(44, 92, 197);
    position: absolute;
    right: 15px;
  }
`