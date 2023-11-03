import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'molecules/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultBadge: Story = {
  args: {
    variant: 'default',
    children: 'default',
  },
}
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}
