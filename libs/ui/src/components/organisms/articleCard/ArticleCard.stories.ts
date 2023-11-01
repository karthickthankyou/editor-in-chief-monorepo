import type { Meta, StoryObj } from '@storybook/react'

import { ArticleCard } from './ArticleCard'

const meta = {
  title: 'organisms/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    article: {
      body: 'Hey body',
      createdAt: new Date().toISOString(),
      id: 1,
      title: ' This is a title',
      tags: ['tag1', 'tag2'],
    },
  },
}
