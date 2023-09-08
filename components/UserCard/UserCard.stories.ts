import type { Meta, StoryObj } from "@storybook/react";

import UserCard from "./UserCard";

const meta: Meta<typeof UserCard> = {
  title: "Components/UserCard",
  component: UserCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // ...
} satisfies Meta<typeof UserCard>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    user: {
      name: "Bill Gates",
      phone: "+1-206-555-0101",
      email: "bill@microsoft.com",
      image: "./images/bill.jpg",
    },
  },
};

export default meta;
