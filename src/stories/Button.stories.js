import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button
};
// argTypes: {
//   backgroundColor: { control: 'color' },
// },

export const Types = (args) => {
  return (
    <>
      <div>
        <Button size="sm" type='primary' label='Small'/>
        <Button size="md" type='primary' label='Normal'/>
        <Button size="lg" type='primary' label='Large'/>
        <Button type='primary' disabled={true} label='Disabled'/>
      </div>
      <div>
        <Button size="sm" type='secondary' label='Small'/>
        <Button size="md" type='secondary' label='Normal'/>
        <Button size="lg" type='secondary' label='Large'/>
        <Button type='secondary' disabled={true} label='Disabled'/>
      </div>
      <div>
        <Button size="sm" type='danger' label='Small'/>
        <Button size="md" type='danger' label='Normal'/>
        <Button size="lg" type='danger' label='Large'/>
        <Button type='danger' disabled={true} label='Disabled'/>
      </div>
    </>
  )
}


// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
