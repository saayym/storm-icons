import { forwardRef } from 'react'

interface MessageCircleProps extends React.SVGProps<SVGSVGElement> {}

const MessageCircle = forwardRef<SVGSVGElement, MessageCircleProps>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M12 3a9 9 0 0 1 0 18c-1.5 0-3-.4-4.2-1L3 21l1-4.8A9 9 0 0 1 12 3"/><path d="M12 3a9 9 0 0 1 0 18c-1.5 0-3-.4-4.2-1L3 21l1-4.8A9 9 0 0 1 12 3"/>
    </svg>
  )
)

MessageCircle.displayName = 'MessageCircle'

export { MessageCircle }
export type { MessageCircleProps }
