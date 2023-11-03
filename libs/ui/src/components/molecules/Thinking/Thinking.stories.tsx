import type { Meta, StoryObj } from '@storybook/react'
import { Thinking } from './Thinking'

const meta: Meta<typeof Thinking> = {
  title: 'src/components/molecules/Thinking/Thinking',
  component: Thinking,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
