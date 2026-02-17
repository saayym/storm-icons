import { forwardRef } from 'react'

interface MailProps extends React.SVGProps<SVGSVGElement> {}

const Mail = forwardRef<SVGSVGElement, MailProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M4 6h16l2 2v10l-2 2H4l-2-2V8z"/><path d="M4 6h16l2 2v10l-2 2H4l-2-2V8z"/><path d="m2 8 10 6 10-6"/>
    </svg>
  )
)

Mail.displayName = 'Mail'

export { Mail }
export type { MailProps }
