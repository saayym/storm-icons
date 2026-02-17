import { forwardRef } from 'react'

interface HandProps extends React.SVGProps<SVGSVGElement> {}

const Hand = forwardRef<SVGSVGElement, HandProps>(
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
      <path d="M18 11V6a2 2 0 0 0-4 0v1a2 2 0 0 0-4 0v1a2 2 0 0 0-4 0v5l-1.5-1.5a2 2 0 0 0-3 2.5L7 20c1 1.5 3 2 5 2h3c3.5 0 6-2.5 6-6v-3a2 2 0 0 0-3-2"/>
    </svg>
  )
)

Hand.displayName = 'Hand'

export { Hand }
export type { HandProps }
