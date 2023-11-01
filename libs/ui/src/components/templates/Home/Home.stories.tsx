import type { Meta, StoryObj } from '@storybook/react'
import { Home } from './Home'

const meta: Meta<typeof Home> = {
  title: 'templates/Home/Home',
  component: Home,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    articles: [
      {
        body: 'Sample body',
        createdAt: new Date(),
        id: 2,
        title: 'Sample title',
        tags: ['simple'],
      },
      {
        body: 'One more sample body',
        createdAt: new Date(),
        id: 3,
        title: 'One more sample title',
        tags: ['tag1'],
      },
    ],
  },
}
