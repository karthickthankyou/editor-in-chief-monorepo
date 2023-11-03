import type { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './Signin'

const meta: Meta<typeof SignIn> = {
  title: 'templates/SignIn',
  component: SignIn,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
