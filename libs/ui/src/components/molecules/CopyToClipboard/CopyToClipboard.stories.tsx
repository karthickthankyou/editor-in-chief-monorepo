import type { Meta, StoryObj } from '@storybook/react'
import { CopyToClipboard } from './CopyToClipboard'

const meta: Meta<typeof CopyToClipboard> = {
  title: 'molecules/CopyToClipboard',
  component: CopyToClipboard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
