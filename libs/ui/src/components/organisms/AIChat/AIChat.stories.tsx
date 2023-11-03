import type { Meta, StoryObj } from '@storybook/react'
import { AIChat } from './AIChat'

const meta: Meta<typeof AIChat> = {
  title: 'src/components/organisms/AIChat/AIChat',
  component: AIChat,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
