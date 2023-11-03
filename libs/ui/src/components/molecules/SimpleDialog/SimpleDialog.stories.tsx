import type { Meta, StoryObj } from '@storybook/react'
import { SimpleDialog } from './SimpleDialog'

const meta: Meta<typeof SimpleDialog> = {
  title: 'molecules/SimpleDialog',
  component: SimpleDialog,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
