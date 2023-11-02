'use client'
import { ReactNode } from 'react'
import { Sheet } from '../../atoms/Sheet'
import { SheetContent, SheetTrigger } from '../../atoms/Sheet/Sheet'
import { Button } from '../../atoms/button'
import { Menu } from 'lucide-react'
import { useDialogState } from '@eic/util/hooks'

export interface IUserSidebarProps {
  children: ReactNode
}

export const UserSidebar = ({ children }: IUserSidebarProps) => {
  const [open, setOpen] = useDialogState(false)

  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">{children}</SheetContent>
      </Sheet>
    </div>
  )
}
