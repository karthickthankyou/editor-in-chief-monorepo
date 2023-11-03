'use client'
import { Bot, User } from 'lucide-react'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/button'
import { SimpleDialog } from '../../molecules/SimpleDialog'
import { useEffect, useState } from 'react'
import { useFormQuestionAI } from '@eic/forms/questionAI'
import { fetchGraphQLGetJwt } from '@eic/common/src/fetch/getJwt'
import { QuestionAiDocument } from '@eic/network/src/generated'
import { Title3 } from '../../atoms/Typography/Typography'
import { ChatItem } from '../../molecules/ChatItem'

export interface IAIChatProps {}

export const AIChat = () => {
  const { register, handleSubmit, reset } = useFormQuestionAI()

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  useEffect(() => {})
  return (
    <SimpleDialog
      buttonText={
        <div className="p-1 border-2 border-black rounded animate-in bg-white/10 backdrop-blur backdrop-filter">
          <Bot />
        </div>
      }
    >
      <Title3 className="flex items-center gap-2 mt-4">
        <Bot /> Ask anything.
      </Title3>
      <div className="mt-6 space-y-6">
        {question && (
          <>
            <ChatItem align="right" Icon={User}>
              {question}
            </ChatItem>
            <ChatItem loading={!!question && !answer} Icon={Bot}>
              <div className="whitespace-pre-wrap">{answer}</div>
            </ChatItem>
          </>
        )}
      </div>
      <div className="sticky bottom-0 flex flex-col gap-2 p-1 bg-white/50 backdrop-blur backdrop-filter">
        {answer ? (
          <Button
            variant={'ghost'}
            onClick={() => {
              setQuestion('')
              setAnswer('')
            }}
          >
            Clear
          </Button>
        ) : null}
        <form
          onSubmit={handleSubmit(async ({ query }) => {
            console.log('data', query)
            setQuestion(query)
            reset()
            const data = await fetchGraphQLGetJwt({
              document: QuestionAiDocument,
              variables: { query },
            })
            console.log('data', data.data?.questionAI)
            setAnswer(data.data?.questionAI || 'No answers. 😕')
          })}
          className="flex gap-2"
        >
          <Input
            placeholder="Talk..."
            className="text-lg"
            {...register('query')}
            disabled={Boolean(answer)}
          />
          <Button disabled={Boolean(answer)}>Send</Button>
        </form>
      </div>
    </SimpleDialog>
  )
}
