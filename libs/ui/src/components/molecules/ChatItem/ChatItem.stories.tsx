import type { Meta, StoryObj } from '@storybook/react'
import { ChatItem } from './ChatItem'

const meta: Meta<typeof ChatItem> = {
  title: 'molecules/ChatItem',
  component: ChatItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
