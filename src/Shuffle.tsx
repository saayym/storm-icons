import { forwardRef } from 'react'

interface ShuffleProps extends React.SVGProps<SVGSVGElement> {}

const Shuffle = forwardRef<SVGSVGElement, ShuffleProps>(
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
      <path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="m4 4 5 5"/>
    </svg>
  )
)

Shuffle.displayName = 'Shuffle'

export { Shuffle }
export type { ShuffleProps }
