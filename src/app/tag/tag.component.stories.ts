import { Meta, StoryObj } from '@storybook/angular';
import { TagComponent } from './tag.component';

const meta: Meta<TagComponent> = {
  component: TagComponent,
};

export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {
  args: {
    tags: [
      { name: 'Angular', color: 'blue' },
      { name: 'Storybook', color: 'green' },
      { name: 'Component', color: 'red' },
    ],
  },
};

export const Empty: Story = {
  args: {
    tags: [],
  },
};

export const CrazyTags: Story = {
  args: {
    tags: Array.from({ length: 100 }, (_, i) => ({
      name: `Tag ${i + 1}`,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    })),
  },
};
