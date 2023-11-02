import type { Meta, StoryObj } from '@storybook/react'
import { CreateReporter } from './CreateReporter'

const meta: Meta<typeof CreateReporter> = {
  title: 'src/components/organisms/CreateReporter/CreateReporter',
  component: CreateReporter,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
