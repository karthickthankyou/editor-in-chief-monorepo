import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'src/components/organisms/Footer/Footer',
  component: Footer,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
