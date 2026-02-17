import { forwardRef } from 'react'

interface PilcrowProps extends React.SVGProps<SVGSVGElement> {}

const Pilcrow = forwardRef<SVGSVGElement, PilcrowProps>(
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
      <path d="M13 4v16m4-16v16M14 4H9.5a4.5 4.5 0 0 0 0 9H13"/>
    </svg>
  )
)

Pilcrow.displayName = 'Pilcrow'

export { Pilcrow }
export type { PilcrowProps }
