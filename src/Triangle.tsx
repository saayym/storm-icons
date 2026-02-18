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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M12 3 3 21h18z"/>
    </svg>
  )
)

Triangle.displayName = 'Triangle'

export { Triangle }
export type { TriangleProps }
