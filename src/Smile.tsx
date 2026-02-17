import { forwardRef } from 'react'

interface SmileProps extends React.SVGProps<SVGSVGElement> {}

const Smile = forwardRef<SVGSVGElement, SmileProps>(
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
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>
    </svg>
  )
)

Smile.displayName = 'Smile'

export { Smile }
export type { SmileProps }
