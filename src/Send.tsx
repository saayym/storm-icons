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
      <path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7"/>
    </svg>
  )
)

Send.displayName = 'Send'

export { Send }
export type { SendProps }
