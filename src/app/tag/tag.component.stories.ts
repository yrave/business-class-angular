import { Meta, StoryObj } from "@storybook/angular";
import { TagComponent } from "./tag.component";

const meta: Meta<TagComponent> = {
  component: TagComponent,
};

export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {
  args: {
    tags: [
      { name: "Angular", color: "blue" },
      { name: "Storybook", color: "green" },
      { name: "Component", color: "red" },
    ],
  },
};
