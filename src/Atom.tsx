import { forwardRef } from 'react'

interface AtomProps extends React.SVGProps<SVGSVGElement> {}

const Atom = forwardRef<SVGSVGElement, AtomProps>(
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
      <circle cx="12" cy="12" r="1" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  )
)

Atom.displayName = 'Atom'

export { Atom }
export type { AtomProps }
