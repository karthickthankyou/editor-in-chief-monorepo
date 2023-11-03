import type { Meta, StoryObj } from '@storybook/react'
import { DeveloperInfo } from './DeveloperInfo'

const meta: Meta<typeof DeveloperInfo> = {
  title: 'atoms/DeveloperInfo',
  component: DeveloperInfo,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
