import { forwardRef } from 'react'

interface PillProps extends React.SVGProps<SVGSVGElement> {}

const Pill = forwardRef<SVGSVGElement, PillProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M10.5 1.5a5 5 0 0 1 7.07 0l4.93 4.93a5 5 0 0 1 0 7.07l-8.49 8.49a5 5 0 0 1-7.07 0l-4.93-4.93a5 5 0 0 1 0-7.07z"/><path d="M10.5 1.5a5 5 0 0 1 7.07 0l4.93 4.93a5 5 0 0 1 0 7.07l-8.49 8.49a5 5 0 0 1-7.07 0l-4.93-4.93a5 5 0 0 1 0-7.07z"/><path d="M6 18 18 6"/>
    </svg>
  )
)

Pill.displayName = 'Pill'

export { Pill }
export type { PillProps }
