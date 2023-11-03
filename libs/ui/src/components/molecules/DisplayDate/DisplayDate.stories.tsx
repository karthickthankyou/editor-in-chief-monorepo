import type { Meta, StoryObj } from '@storybook/react'
import { DisplayDate } from './DisplayDate'

const meta: Meta<typeof DisplayDate> = {
  title: 'molecules/DisplayDate',
  component: DisplayDate,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
