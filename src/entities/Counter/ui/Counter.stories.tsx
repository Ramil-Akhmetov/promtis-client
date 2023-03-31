import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Counter } from './Counter';

export default {
  title: 'test/Counter',
  component: Counter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
