import { forwardRef } from 'react'

interface SkipForwardProps extends React.SVGProps<SVGSVGElement> {}

const SkipForward = forwardRef<SVGSVGElement, SkipForwardProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m5 4 10 8-10 8z"/><path d="m5 4 10 8-10 8z"/><path d="M19 5v14"/>
    </svg>
  )
)

SkipForward.displayName = 'SkipForward'

export { SkipForward }
export type { SkipForwardProps }
