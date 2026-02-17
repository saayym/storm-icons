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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10c0-.63.3-1.22.8-1.6l8-6a2 2 0 0 1 2.4 0z"/><path d="m22 10-10 6-10-6"/><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10c0-.63.3-1.22.8-1.6l8-6a2 2 0 0 1 2.4 0z"/>
    </svg>
  )
)

MailOpen.displayName = 'MailOpen'

export { MailOpen }
export type { MailOpenProps }
