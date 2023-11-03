import type { Meta, StoryObj } from '@storybook/react'
import { Brand } from './Brand'

const meta: Meta<typeof Brand> = {
  title: 'atoms/Brand',
  component: Brand,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
