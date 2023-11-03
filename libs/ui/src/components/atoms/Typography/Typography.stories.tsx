import type { Meta, StoryObj } from '@storybook/react'
import { Title } from './Typography'

const meta: Meta<typeof Title> = {
  title: 'atoms/Typography',
  component: Title,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
