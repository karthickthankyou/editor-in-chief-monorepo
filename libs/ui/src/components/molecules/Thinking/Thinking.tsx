import { useEffect, useState } from 'react'

export interface IThinkingProps {
  /**
   * Interval in milliseconds between the changes of dots.
   * @type {number}
   * @default 500
   */
  interval?: number // Interval in milliseconds
}

export const Thinking = ({ interval = 500 }: IThinkingProps) => {
  const [dots, setDots] = useState('.')

  useEffect(() => {
    const timerId = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : '.'))
    }, interval)

    return () => clearInterval(timerId)
  }, [interval])

  return <div className="text-2xl">{dots}</div>
}
