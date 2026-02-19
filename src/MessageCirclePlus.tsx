import { forwardRef } from 'react'

interface MessageCirclePlusProps extends React.SVGProps<SVGSVGElement> {}

const MessageCirclePlus = forwardRef<SVGSVGElement, MessageCirclePlusProps>(
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
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/><path d="M12 8v6"/><path d="M9 11h6"/>
    </svg>
  )
)

MessageCirclePlus.displayName = 'MessageCirclePlus'

export { MessageCirclePlus }
export type { MessageCirclePlusProps }
