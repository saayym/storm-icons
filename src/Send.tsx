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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 3 18 9-18 9 4-9z"/><path d="M7 12h14"/>
    </svg>
  )
)

Send.displayName = 'Send'

export { Send }
export type { SendProps }
