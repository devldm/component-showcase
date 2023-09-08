import type { Meta, StoryObj } from "@storybook/react";

import MusicPlayerItem from "./MusicPlayerItem";

const meta: Meta<typeof MusicPlayerItem> = {
  title: "Components/MusicPlayerItem",
  component: MusicPlayerItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // ...
} satisfies Meta<typeof MusicPlayerItem>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    album: {
      imgHref: "./images/mf.jpg",
      album_title: "Madvillainy",
      artist: "Madvillain, Madlid, MF DOOM",
    },
  },
};

export default meta;
