import type { Meta, StoryObj } from '@storybook/react'
import { Home } from './Home'

const meta: Meta<typeof Home> = {
  title: 'templates/Home',
  component: Home,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    articles: [
      {
        article: {
          body: 'Sample body',
          createdAt: new Date(),
          id: 2,
          title: 'Sample title',
          tags: ['simple'],
        },
        score: 0.6,
      },
      {
        article: {
          body: 'One more sample body',
          createdAt: new Date(),
          id: 3,
          title: 'One more sample title',
          tags: ['tag1'],
        },
        score: 0.6,
      },
    ],
  },
}
