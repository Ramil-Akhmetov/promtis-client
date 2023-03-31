import { ComponentStory, ComponentMeta } from '@storybook/react';
import RegisterPage from './RegisterPage';

export default {
  title: 'pages/RegisterPage',
  component: RegisterPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RegisterPage>;

const Template: ComponentStory<typeof RegisterPage> = (args) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <RegisterPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
