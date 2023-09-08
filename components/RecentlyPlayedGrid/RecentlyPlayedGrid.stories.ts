import type { Meta, StoryObj } from "@storybook/react";

import RecentlyPlayedGrid from "./RecentlyPlayedGrid";

const meta: Meta<typeof RecentlyPlayedGrid> = {
  title: "Components/RecentlyPlayedGrid",
  component: RecentlyPlayedGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // ...
} satisfies Meta<typeof RecentlyPlayedGrid>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
      
  },
};

export default meta;
