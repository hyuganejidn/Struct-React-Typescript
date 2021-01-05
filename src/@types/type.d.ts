import { ChangeEvent } from 'react'

declare global {
  type EventInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
}
