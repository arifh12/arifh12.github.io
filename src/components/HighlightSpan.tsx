import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const HighlightSpan = ({children}: Props) => {
  return (
    <span className="text-primary">{children}</span>
  )
}

export default HighlightSpan