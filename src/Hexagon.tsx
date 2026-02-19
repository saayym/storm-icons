import { forwardRef } from 'react'

interface HexagonProps extends React.SVGProps<SVGSVGElement> {}

const Hexagon = forwardRef<SVGSVGElement, HexagonProps>(
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
      <path d="m12 2 9 5v10l-9 5-9-5V7z"/>
    </svg>
  )
)

Hexagon.displayName = 'Hexagon'

export { Hexagon }
export type { HexagonProps }
