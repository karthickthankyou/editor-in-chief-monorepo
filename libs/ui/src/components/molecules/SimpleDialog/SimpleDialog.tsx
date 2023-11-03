'use client'
import { ReactNode, useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { DialogContent, DialogTrigger } from '../../atoms/Dialog/Dialog'
import { Button } from '../../atoms/button'
import { BaseComponent } from '@eic/util/types'
import { Sparkles } from 'lucide-react'

export interface ICreateReporterProps extends BaseComponent {
  buttonText: ReactNode
  buttonVariant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
}

export const SimpleDialog = ({
  children,
  buttonText,
  buttonVariant = 'outline',
}: ICreateReporterProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>
          {buttonText} <Sparkles className="w-4 h-4 ml-2" />{' '}
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-[calc(100vh-4rem)] sm:max-w-lg">
        {children}
      </DialogContent>
    </Dialog>
  )
}
