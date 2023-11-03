import type { Meta, StoryObj } from '@storybook/react'
import { Register } from './Register'

const meta: Meta<typeof Register> = {
  title: 'src/components/templates/Register/Register',
  component: Register,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
