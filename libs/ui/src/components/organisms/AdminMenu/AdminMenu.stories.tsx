import type { Meta, StoryObj } from '@storybook/react'
import { AdminMenu } from './AdminMenu'

const meta: Meta<typeof AdminMenu> = {
  title: 'organisms/AdminMenu',
  component: AdminMenu,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
