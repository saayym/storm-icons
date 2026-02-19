import { forwardRef } from 'react'

interface ContactProps extends React.SVGProps<SVGSVGElement> {}

const Contact = forwardRef<SVGSVGElement, ContactProps>(
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
      <rect width="18" height="16" x="3" y="4" rx="1"/><circle cx="12" cy="10" r="3"/><path d="M7 20a5 5 0 0 1 10 0"/><path d="M1 8h2"/><path d="M1 12h2"/><path d="M1 16h2"/>
    </svg>
  )
)

Contact.displayName = 'Contact'

export { Contact }
export type { ContactProps }
