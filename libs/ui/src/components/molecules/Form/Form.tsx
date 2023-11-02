'use client'
import { BaseComponent, FormState } from '@eic/util/types'
import { useFormState } from 'react-dom'

import { SubmitButton } from '../SubmitButton'

export interface IFormProps extends BaseComponent {
  action: (state: FormState, formData: FormData) => Promise<FormState>
  submitButtonText?: string
}

export const Form = ({
  action,
  children,
  submitButtonText = 'Submit',
}: IFormProps) => {
  const [state, formAction] = useFormState(action, { data: null, error: null })

  return (
    <form action={formAction}>
      {children}
      {state.error ? (
        <div className="mb-2 text-sm text-red-500">{state.error}</div>
      ) : null}

      {state.data ? (
        <div className="my-2 text-lg font-semibold">{state.data} 🎉</div>
      ) : null}
      <SubmitButton className="mt-2">{submitButtonText}</SubmitButton>
    </form>
  )
}
