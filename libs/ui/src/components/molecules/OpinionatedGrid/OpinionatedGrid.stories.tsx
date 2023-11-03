import type { Meta, StoryObj } from '@storybook/react'
import { OpinionatedGrid } from './OpinionatedGrid'

const meta: Meta<typeof OpinionatedGrid> = {
  title: 'molecules/OpinionatedGrid',
  component: OpinionatedGrid,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
