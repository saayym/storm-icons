import { forwardRef } from 'react'

interface OctagonProps extends React.SVGProps<SVGSVGElement> {}

const Octagon = forwardRef<SVGSVGElement, OctagonProps>(
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
      <path d="M8 2h8l6 6v8l-6 6H8l-6-6V8z"/>
    </svg>
  )
)

Octagon.displayName = 'Octagon'

export { Octagon }
export type { OctagonProps }
