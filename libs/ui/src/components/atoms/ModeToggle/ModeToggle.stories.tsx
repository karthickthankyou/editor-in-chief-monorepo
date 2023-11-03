import type { Meta, StoryObj } from '@storybook/react'
import { ModeToggle } from './ModeToggle'

const meta: Meta<typeof ModeToggle> = {
  title: 'atoms/ModeToggle',
  component: ModeToggle,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
