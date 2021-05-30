import react from 'react';
import Dropdown from '../components/Dropdown';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Select',
  component: Dropdown
}

const options = [
  {id: 1, value: 'One', isDisabled: false},
  {id: 2, value: 'Two', isDisabled: true},
  {id: 3, value: 'Three', isDisabled: false},
  {id: 4, value: 'Four', isDisabled: false},
  {id: 5, value: 'Five', isDisabled: true},
  {id: 6, value: 'Six', isDisabled: false},
  {id: 7, value: 'Seven', isDisabled: false}
]

export const ButtonDropdown = () => {
  return (
    <Dropdown options={options} width='300px' height='40px' onChange={action('new item selected')}/>
  );
}