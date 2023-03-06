import type { Meta, StoryObj } from '@storybook/react';

import { HelloWorld, IHelloWorld } from "component-library";
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Component Library/Hello World',
  component: HelloWorld,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Welcome: Story = {
  args: {
    text: "Pavan's Space"
  },
};