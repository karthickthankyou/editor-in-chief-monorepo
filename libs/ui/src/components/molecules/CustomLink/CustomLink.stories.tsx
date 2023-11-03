import type { Meta, StoryObj } from '@storybook/react'
import { CustomLink } from './CustomLink'

const meta: Meta<typeof CustomLink> = {
  title: 'src/components/molecules/CustomLink/CustomLink',
  component: CustomLink,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
