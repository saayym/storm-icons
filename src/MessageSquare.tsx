import { forwardRef } from 'react'

interface MessageSquareProps extends React.SVGProps<SVGSVGElement> {}

const MessageSquare = forwardRef<SVGSVGElement, MessageSquareProps>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 3h18v14H9l-4 4v-4H3Z"/>
    </svg>
  )
)

MessageSquare.displayName = 'MessageSquare'

export { MessageSquare }
export type { MessageSquareProps }
