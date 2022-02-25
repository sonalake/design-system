import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from '../typography';
import { Button } from './button.component';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={() => alert()}>
    <Typography translationKey="STORY_BOOK.BUTTON" />
  </Button>
);

export const Small: ComponentStory<typeof Button> = () => (
  <Button size="sm">
    <Typography translationKey="STORY_BOOK.BUTTON" />
  </Button>
);

export const Disabled: ComponentStory<typeof Button> = () => (
  <Button disabled>
    <Typography translationKey="STORY_BOOK.BUTTON" />
  </Button>
);

export const WithIcons: ComponentStory<typeof Button> = () => (
  <div className="inline-flex flex-col gap-2">
    <Button>
      <Typography translationKey="STORY_BOOK.BUTTON_RIGHT" />
      <FaSearch />
    </Button>
    <Button>
      <FaSearch />
      <Typography translationKey="STORY_BOOK.BUTTON_LEFT" />
    </Button>
    <Button>
      <FaSearch />
      <Typography translationKey="STORY_BOOK.BUTTON_BOTH" />
      <FaSearch />
    </Button>
  </div>
);
