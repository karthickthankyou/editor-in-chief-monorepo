import type { Meta, StoryObj } from '@storybook/react'

import { ReactionButton } from './ReactionButton'
import { Frown, SmilePlus } from 'lucide-react'

const meta = {
  title: 'molecules/ReactionButton',
  component: ReactionButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactionButton>

export default meta
type Story = StoryObj<typeof meta>

export const SmileIcon: Story = {
  args: {
    Icon: SmilePlus,
    onClick() {
      console.log('hello ther.')
    },
  },
}
export const SmileIconSelected: Story = {
  args: {
    Icon: SmilePlus,
    onClick() {
      console.log('hello ther.')
    },
    selected: true,
  },
}

export const FrownIcon: Story = {
  args: {
    Icon: Frown,
  },
}
