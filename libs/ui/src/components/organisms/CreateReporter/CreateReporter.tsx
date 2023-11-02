'use client'
import { useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { DialogContent, DialogTrigger } from '../../atoms/Dialog/Dialog'
import { Button } from '../../atoms/button'

export interface ICreateReporterProps {}

export const CreateReporter = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Reporter</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        Hey there.
        {/* <FormProviderCreateCategory>
          <CreateCategoryContent closeDialog={() => setOpen(false)} />
        </FormProviderCreateCategory> */}
      </DialogContent>
    </Dialog>
  )
}
