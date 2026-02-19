import { forwardRef } from 'react'

interface BinaryProps extends React.SVGProps<SVGSVGElement> {}

const Binary = forwardRef<SVGSVGElement, BinaryProps>(
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
      <path d="M11 10V5h-1m8 14v-5h-1"/><path d="M15 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/><path d="M10 14.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/><path d="M6 10h.01M6 19h.01"/>
    </svg>
  )
)

Binary.displayName = 'Binary'

export { Binary }
export type { BinaryProps }
