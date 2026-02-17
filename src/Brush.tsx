import { forwardRef } from 'react'

interface BrushProps extends React.SVGProps<SVGSVGElement> {}

const Brush = forwardRef<SVGSVGElement, BrushProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m18 4-6 6H8l-4 4v4h4l4-4v-4z"/><path d="m18 4-6 6H8l-4 4v4h4l4-4v-4z"/><path d="m22 2-4 2"/>
    </svg>
  )
)

Brush.displayName = 'Brush'

export { Brush }
export type { BrushProps }
