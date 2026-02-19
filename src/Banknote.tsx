import { forwardRef } from 'react'

interface BanknoteProps extends React.SVGProps<SVGSVGElement> {}

const Banknote = forwardRef<SVGSVGElement, BanknoteProps>(
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
      <rect width="20" height="12" x="2" y="6" rx="1"/><circle cx="12" cy="12" r="3"/><path d="M2 12h3"/><path d="M19 12h3"/>
    </svg>
  )
)

Banknote.displayName = 'Banknote'

export { Banknote }
export type { BanknoteProps }
