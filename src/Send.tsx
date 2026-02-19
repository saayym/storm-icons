import { forwardRef } from 'react'

interface SendProps extends React.SVGProps<SVGSVGElement> {}

const Send = forwardRef<SVGSVGElement, SendProps>(
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
      <path d="M10 14 21 3"/><path d="m21 3-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/>
    </svg>
  )
)

Send.displayName = 'Send'

export { Send }
export type { SendProps }
