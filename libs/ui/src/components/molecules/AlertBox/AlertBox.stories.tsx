import type { Meta, StoryObj } from '@storybook/react'
import { AlertBox } from './AlertBox'

const meta: Meta<typeof AlertBox> = {
  title: 'molecules/AlertBox',
  component: AlertBox,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
