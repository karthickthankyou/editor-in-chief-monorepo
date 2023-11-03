import type { Meta, StoryObj } from '@storybook/react'
import { Sheet } from './Sheet'

const meta: Meta<typeof Sheet> = {
  title: 'atoms/Sheet',
  component: Sheet,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
