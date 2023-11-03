import type { Meta, StoryObj } from '@storybook/react'
import { ReactionPanel } from './ReactionPanel'

const meta: Meta<typeof ReactionPanel> = {
  title: 'organisms/ReactionPanel',
  component: ReactionPanel,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
