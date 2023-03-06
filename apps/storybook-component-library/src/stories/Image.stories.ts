import type { Meta, StoryObj } from '@storybook/react';

import { Image } from "component-library";
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Component Library/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1539807083969-fc1f6a4f6da8',
    alt: 'Surfer in the ocean'
  },
};