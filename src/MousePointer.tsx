import { forwardRef } from 'react'

interface MousePointerProps extends React.SVGProps<SVGSVGElement> {}

const MousePointer = forwardRef<SVGSVGElement, MousePointerProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51z"/><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51z"/><path d="m13 13 6 6"/>
    </svg>
  )
)

MousePointer.displayName = 'MousePointer'

export { MousePointer }
export type { MousePointerProps }
