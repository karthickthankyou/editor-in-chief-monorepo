import type { Meta, StoryObj } from '@storybook/react'
import { TellThem } from './TellThem'

const meta: Meta<typeof TellThem> = {
  title: 'molecules/TellThem',
  component: TellThem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
