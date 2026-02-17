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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z"/><path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z"/>
    </svg>
  )
)

Octagon.displayName = 'Octagon'

export { Octagon }
export type { OctagonProps }
