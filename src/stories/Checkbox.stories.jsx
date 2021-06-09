import Checkbox from '../components/Checkbox';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Example/Checkbox',
  component: Checkbox
}

export const UiCheckbox = () => {
  return (
    <div>
      <Checkbox labelName="Normal" value="check_1" />
      <Checkbox labelName="Checked" checked value="check_2" />
      <Checkbox labelName="Disabled" disabled value="check_3" />
      <Checkbox labelName="Indeterminate" value="check_4" indeterminate />
      <div>
        <Checkbox width="21px" height="21px" labelName="Custom" value="check_5" />
      </div>
      
    </div>
  );
}