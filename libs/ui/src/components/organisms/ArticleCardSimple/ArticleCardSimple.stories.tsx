import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCardSimple } from './ArticleCardSimple'

const meta: Meta<typeof ArticleCardSimple> = {
  title: 'organisms/ArticleCardSimple',
  component: ArticleCardSimple,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
