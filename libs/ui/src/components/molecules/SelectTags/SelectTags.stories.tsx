import type { Meta, StoryObj } from '@storybook/react'
import { SelectTags } from './SelectTags'

const meta: Meta<typeof SelectTags> = {
  title: 'molecules/SelectTags',
  component: SelectTags,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
