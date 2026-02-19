import { forwardRef } from 'react'

interface ChartBarHorizontalProps extends React.SVGProps<SVGSVGElement> {}

const ChartBarHorizontal = forwardRef<SVGSVGElement, ChartBarHorizontalProps>(
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
      <path d="M3 3v18"/><path d="M6 4h13v4H6z"/><path d="M6 10h9v4H6z"/><path d="M6 16h15v4H6z"/>
    </svg>
  )
)

ChartBarHorizontal.displayName = 'ChartBarHorizontal'

export { ChartBarHorizontal }
export type { ChartBarHorizontalProps }
