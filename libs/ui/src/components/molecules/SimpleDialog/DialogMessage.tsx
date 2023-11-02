'use client'
import { Dispatch, SetStateAction } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { DialogContent } from '../../atoms/Dialog/Dialog'

import { BaseComponent } from '@eic/util/types'

export interface ICreateReporterProps extends BaseComponent {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

export const DialogMessage = ({
  open,
  setOpen,
  children,
}: ICreateReporterProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">{children}</DialogContent>
    </Dialog>
  )
}
