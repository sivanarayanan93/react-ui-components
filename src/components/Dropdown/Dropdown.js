import React , { useState, useRef } from 'react';
import { DropdownWrapper, DropdownButton, DropdownMenu, DropdownMenuItem } from './dropdown.style';
import { useOutsideChecker } from '../../hooks/useOutsideChecker';

const Dropdown = ({width, height, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const DropdownWrapperRef = useRef(null);

  const { onChange, options } = props;

  const toggleIsOpen = () => {
    if (isOpen) {
      setIsOpen(state => false);
    }
  }

  const selectItem = (item, e) => {
    e.preventDefault();

    setIsOpen(state => !state);
    setSelectedItem(item.value);
    onChange(item);
  }

  useOutsideChecker(DropdownWrapperRef, isOpen, toggleIsOpen);

  return (
    <DropdownWrapper ref={DropdownWrapperRef} style={{width, height}}>
      <DropdownButton onClick={(e) => setIsOpen(state => !state)}>
        {selectedItem || 'Select Value'}
      </DropdownButton>

      {isOpen &&
        <DropdownMenu>
          {options && options.map((option) => {
            const isSelected = option.value === selectedItem,
                  {isDisabled, id, value } = option;
            
            return (
              <DropdownMenuItem isDisabled={isDisabled} selected={isSelected} key={id} onClick={(e) => !isDisabled && selectItem(option, e)}>
                <a>{option.value}
                {isSelected && <span>&#10003;</span>}
                </a>
              </DropdownMenuItem>
            )            
          })}          
        </DropdownMenu>
      }
    
    </DropdownWrapper>
  )
}

export default Dropdown;