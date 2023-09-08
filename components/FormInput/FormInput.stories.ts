import type { Meta, StoryObj } from "@storybook/react";

import FormInput from "./FormInput";

const meta: Meta<typeof FormInput> = {
  title: "Components/FormInput",
  component: FormInput,
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
