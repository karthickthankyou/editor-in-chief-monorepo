import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCardSimple } from './ArticleCardSimple'

const meta: Meta<typeof ArticleCardSimple> = {
  title: 'src/components/organisms/ArticleCardSimple/ArticleCardSimple',
  component: ArticleCardSimple,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
