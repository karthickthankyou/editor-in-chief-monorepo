import type { Meta, StoryObj } from '@storybook/react'
import { AdminMenu } from './AdminMenu'

const meta: Meta<typeof AdminMenu> = {
  title: 'src/components/organisms/AdminMenu/AdminMenu',
  component: AdminMenu,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
