import Toggle from '../components/Toggle';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Example/Toggle',
  component: Toggle
}

export const UiToggle = () => {
  return (
    <>
      <Toggle />
      <Toggle checked />
      <Toggle disabled/>
    </>
  );
}