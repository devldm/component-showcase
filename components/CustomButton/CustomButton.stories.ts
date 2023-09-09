import type { Meta, StoryObj } from "@storybook/react";

import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // ...
} satisfies Meta<typeof CustomButton>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonText: "Login",
    type: "submit",
    customStyles: "w-[400px] px-6",
  },
};

export default meta;
