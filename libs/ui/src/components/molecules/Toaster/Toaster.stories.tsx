import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './Toaster'

const meta: Meta<typeof Toaster> = {
  title: 'src/components/molecules/Toaster/Toaster',
  component: Toaster,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
