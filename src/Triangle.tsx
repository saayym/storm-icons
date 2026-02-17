import { forwardRef } from 'react'

interface TriangleProps extends React.SVGProps<SVGSVGElement> {}

const Triangle = forwardRef<SVGSVGElement, TriangleProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m12 2 10 18H2z"/><path d="m12 2 10 18H2z"/>
    </svg>
  )
)

Triangle.displayName = 'Triangle'

export { Triangle }
export type { TriangleProps }
