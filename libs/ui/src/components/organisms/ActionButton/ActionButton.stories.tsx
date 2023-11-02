import type { Meta, StoryObj } from '@storybook/react'
import { ActionButton } from './ActionButton'

const meta: Meta<typeof ActionButton> = {
  title: 'src/components/organisms/ActionButton/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
