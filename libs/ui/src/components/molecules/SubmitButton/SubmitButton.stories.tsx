import type { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from './SubmitButton'

const meta: Meta<typeof SubmitButton> = {
  title: 'src/components/molecules/SubmitButton/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
