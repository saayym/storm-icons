import { forwardRef } from 'react'

interface MailOpenProps extends React.SVGProps<SVGSVGElement> {}

const MailOpen = forwardRef<SVGSVGElement, MailOpenProps>(
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
      <path d="M21 10v10H3V10l9-7z"/><path d="m3 10 9 7 9-7"/>
    </svg>
  )
)

MailOpen.displayName = 'MailOpen'

export { MailOpen }
export type { MailOpenProps }
