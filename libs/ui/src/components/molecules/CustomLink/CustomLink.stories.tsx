import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './CustomLink'

const meta: Meta<typeof Link> = {
  title: 'molecules/CustomLink',
  component: Link,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
