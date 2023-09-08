import type { Meta, StoryObj } from "@storybook/react";

import Login from "./Login";

const meta: Meta<typeof Login> = {
  title: "Components/Login",
  component: Login,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // ...
} satisfies Meta<typeof Login>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export default meta;
