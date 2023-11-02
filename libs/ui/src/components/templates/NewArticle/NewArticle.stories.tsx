import type { Meta, StoryObj } from '@storybook/react'
import { NewArticle } from './NewArticle'

const meta: Meta<typeof NewArticle> = {
  title: 'src/components/templates/NewArticle/NewArticle',
  component: NewArticle,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
