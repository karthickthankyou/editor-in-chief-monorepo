import type { Meta, StoryObj } from '@storybook/react'
import { ReporterMenu } from './ReporterMenu'

const meta: Meta<typeof ReporterMenu> = {
  title: 'src/components/organisms/ReporterMenu/ReporterMenu',
  component: ReporterMenu,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
