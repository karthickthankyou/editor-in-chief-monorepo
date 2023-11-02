import type { Meta, StoryObj } from '@storybook/react'
import { UserSidebar } from './UserSidebar'

const meta: Meta<typeof UserSidebar> = {
  title: 'src/components/organisms/UserSidebar/UserSidebar',
  component: UserSidebar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
