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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="6" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>
    </svg>
  )
)

Banknote.displayName = 'Banknote'

export { Banknote }
export type { BanknoteProps }
