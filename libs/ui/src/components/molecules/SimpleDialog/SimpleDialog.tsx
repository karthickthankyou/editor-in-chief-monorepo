'use client'
import { ReactNode, useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { DialogContent, DialogTrigger } from '../../atoms/Dialog/Dialog'
import { Button } from '../../atoms/button'
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
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  )
}
