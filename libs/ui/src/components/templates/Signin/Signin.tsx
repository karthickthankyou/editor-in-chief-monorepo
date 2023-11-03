'use client'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'
import { useFormSignin } from '@eic/forms/signin'
import { Button } from '../../atoms/button'
import { signIn } from 'next-auth/react'

export interface IRegisterProps {}

export const SignIn = () => {
  const { register, handleSubmit } = useFormSignin()
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <form
        onSubmit={handleSubmit(({ email, password }) => {
          signIn('credentials', { email, password })
        })}
      >
        <Label title="Email">
          <Input {...register('email')} />
        </Label>
        <Label title="Password">
          <Input {...register('password')} />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
