'use client'
import { ReactNode, useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { DialogContent, DialogTrigger } from '../../atoms/Dialog/Dialog'

import { BaseComponent } from '@eic/util/types'

export interface ICreateReporterProps extends BaseComponent {
  buttonText: ReactNode
}

export const SimpleDialog = ({
  children,
  buttonText,
}: ICreateReporterProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm">{buttonText}</button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-[calc(100vh-4rem)] sm:max-w-lg">
        {children}
      </DialogContent>
    </Dialog>
  )
}
