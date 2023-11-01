import type { Meta, StoryObj } from '@storybook/react'
import { ArticlePage } from './ArticlePage'

const meta: Meta<typeof ArticlePage> = {
  title: 'templates/ArticlePage/ArticlePage',
  component: ArticlePage,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
