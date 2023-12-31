import type { Meta, StoryObj } from "@storybook/react";

import FormInput from "./FormInput";

const meta: Meta<typeof FormInput> = {
  title: "Components/FormInput",
  component: FormInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
  },
  // ...
} satisfies Meta<typeof FormInput>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Login",
    type: "text",
  },
};

export default meta;
