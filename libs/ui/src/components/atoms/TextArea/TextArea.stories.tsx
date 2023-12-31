import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
