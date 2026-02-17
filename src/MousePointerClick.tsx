import { forwardRef } from 'react'

interface MousePointerClickProps extends React.SVGProps<SVGSVGElement> {}

const MousePointerClick = forwardRef<SVGSVGElement, MousePointerClickProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m9 9 4 12 1.6-5.8 5.8-1.2z"/><path d="m9 9 4 12 1.6-5.8 5.8-1.2z"/><path d="m3 3 2.5 2.5M11 2l-1 3m-8 6 3-1"/><path d="M16.5 16.5 19 19"/>
    </svg>
  )
)

MousePointerClick.displayName = 'MousePointerClick'

export { MousePointerClick }
export type { MousePointerClickProps }
