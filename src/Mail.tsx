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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 4h18v16H3z"/><path d="m3 4 9 9 9-9"/>
    </svg>
  )
)

Mail.displayName = 'Mail'

export { Mail }
export type { MailProps }
