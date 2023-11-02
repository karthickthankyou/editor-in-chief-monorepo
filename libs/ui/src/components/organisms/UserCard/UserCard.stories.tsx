import type { Meta, StoryObj } from '@storybook/react'
import { UserCard } from './UserCard'

const meta: Meta<typeof UserCard> = {
  title: 'src/components/organisms/UserCard/UserCard',
  component: UserCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
