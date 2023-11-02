import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'

const meta: Meta<typeof Form> = {
  title: 'src/components/molecules/Form/Form',
  component: Form,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
