import { forwardRef } from 'react'

interface ShrinkProps extends React.SVGProps<SVGSVGElement> {}

const Shrink = forwardRef<SVGSVGElement, ShrinkProps>(
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
      <path d="M5 9h4V5"/><path d="m3 3 6 6"/><path d="M5 15h4v4"/><path d="m3 21 6-6"/><path d="M19 9h-4V5"/><path d="m15 9 6-6"/><path d="M19 15h-4v4"/><path d="m15 15 6 6"/>
    </svg>
  )
)

Shrink.displayName = 'Shrink'

export { Shrink }
export type { ShrinkProps }
