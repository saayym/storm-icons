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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0 1 10 0v1"/>
    </svg>
  )
)

Contact.displayName = 'Contact'

export { Contact }
export type { ContactProps }
