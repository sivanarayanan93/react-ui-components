import Input from '../components/Input';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Example/Input',
  component: Input
}

export const UiInput = () => {
  return (
    <>
    <div>
      <Input onChange={action('new string from Normal')} placeholder="Normal" />
    </div>
    <div>
      <Input onChange={action('new string from Disabled')} placeholder="Disabled" disabled/>
    </div>
    <div>
      <Input onChange={action('new string from Invalid')} placeholder="Invalid" invalid/>
    </div>

    <div>
      <Input onChange={action('new string from Search')} enableSearch="true" placeholder="Search"/>
    </div>
    </>
  );
}