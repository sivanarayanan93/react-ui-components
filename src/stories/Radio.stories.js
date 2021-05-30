import Radio from '../components/Radio';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Example/Radio',
  component: Radio
}

export const UiRadio = () => {
  return (
    <div>
      <Radio name="rank" value="rank_1" labelName="Rank 1" />
      <Radio name="rank" value="rank_2" labelName="Rank 2" disabled/>
      <Radio name="rank" value="rank_3" labelName="Rank 3"/>
    </div>
  );
}