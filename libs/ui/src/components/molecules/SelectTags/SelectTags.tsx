'use client'
import React, { useState } from 'react'

import { Input } from '../../atoms/Input'

import { Badge } from '../Badge'
import { BaseComponent } from '@eic/util/types'
import { cn } from '../../../utils'
import { Label } from '../../atoms/Label'

interface BadgesInputProps extends BaseComponent {
  onChange: (tags: string[]) => void
}

export const SelectTags: React.FC<BadgesInputProps> = ({
  className,
  onChange,
}) => {
  const [value, setValue] = useState('')
  const [badges, setBadges] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    const tags = e.target.value
    const tagsArray = tags
      .split(',')
      .map((tag) => tag.trim().split(' ').join('-'))
      .filter((tag) => tag !== '')
    setBadges(tagsArray)
    onChange(tagsArray)
  }

  return (
    <div className={cn('space-y-2', className)}>
      <Label title="Tags">
        <Input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Type and press Enter to add badges"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-input sm:text-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </Label>
      <div className="flex flex-wrap gap-2 mb-2">
        {badges.map((badge, index) => (
          <Badge variant={'outline'} key={index}>
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  )
}
