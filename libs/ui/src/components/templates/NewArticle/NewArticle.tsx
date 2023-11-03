'use client'
import {
  FormProviderCreateArticle,
  FormTypeCreateArticle,
} from '@eic/forms/createArticle'
import { useFormContext, Controller } from '@eic/forms/util'
import { Label } from '../../atoms/Label'
import { Input } from '../../atoms/Input'
import { TextArea } from '../../atoms/TextArea/TextArea'
import { Button } from '../../atoms/button'
import { SelectTags } from '../../molecules/SelectTags'
import { createArticle } from '@eic/common/src/actions/createArticle'
import { Switch } from '../../atoms/Switch'
import { useState } from 'react'
import { DialogMessage } from '../../molecules/SimpleDialog/DialogMessage'

export interface INewArticleProps {}

export const NewArticle = () => {
  return (
    <FormProviderCreateArticle>
      <NewArticleContent />
    </FormProviderCreateArticle>
  )
}

export const NewArticleContent = () => {
  const { register, handleSubmit, reset, setValue, control } =
    useFormContext<FormTypeCreateArticle>()
  const [open, setOpen] = useState(false)
  const [message, setMesage] = useState('')

  return (
    <div className="overflow-y-auto">
      <form
        onSubmit={handleSubmit(async (formData) => {
          const { data, error } = await createArticle(formData)
          setOpen(true)
          if (data) {
            setMesage(` ${data} 🎉`)
            reset()
          }
          if (error) {
            setMesage(error)
          }
          console.log('data', data)
        })}
        className="flex flex-col my-4"
      >
        <DialogMessage open={open} setOpen={setOpen}>
          {message}
        </DialogMessage>
        <h1 className="mb-2 text-lg font-semibold">Post new job</h1>
        <Label title="Title">
          <Input {...register('title')} placeholder="Title" />
        </Label>
        <Label title="Body">
          <TextArea {...register('body')} placeholder="Body" />
        </Label>

        <Label title="Published">
          <Controller
            control={control}
            name="published"
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                placeholder="Published"
              />
            )}
          />
        </Label>

        <SelectTags
          onChange={(tags) => {
            console.log('tags', tags)
            setValue('tags', tags)
          }}
          className="mb-4"
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
