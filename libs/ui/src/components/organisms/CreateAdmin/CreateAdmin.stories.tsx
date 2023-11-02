import type { Meta, StoryObj } from '@storybook/react'
import { CreateAdmin } from './CreateAdmin'

const meta: Meta<typeof CreateAdmin> = {
  title: 'src/components/organisms/CreateAdmin/CreateAdmin',
  component: CreateAdmin,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
