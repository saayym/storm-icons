import { forwardRef } from 'react'

interface ScissorsProps extends React.SVGProps<SVGSVGElement> {}

const Scissors = forwardRef<SVGSVGElement, ScissorsProps>(
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
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/>
    </svg>
  )
)

Scissors.displayName = 'Scissors'

export { Scissors }
export type { ScissorsProps }
