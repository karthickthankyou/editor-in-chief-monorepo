import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'atoms/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
