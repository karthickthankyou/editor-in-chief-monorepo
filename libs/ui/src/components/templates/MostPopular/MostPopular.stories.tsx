import type { Meta, StoryObj } from '@storybook/react'
import { MostPopular } from './MostPopular'

const meta: Meta<typeof MostPopular> = {
  title: 'templates/MostPopular/MostPopular',
  component: MostPopular,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
