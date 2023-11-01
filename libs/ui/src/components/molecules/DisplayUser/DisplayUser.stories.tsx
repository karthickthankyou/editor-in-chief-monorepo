import type { Meta, StoryObj } from '@storybook/react'
import { DisplayUser } from './DisplayUser'

const meta: Meta<typeof DisplayUser> = {
  title: 'molecules/DisplayUser',
  component: DisplayUser,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
