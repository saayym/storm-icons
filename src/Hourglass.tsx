import { forwardRef } from 'react'

interface HourglassProps extends React.SVGProps<SVGSVGElement> {}

const Hourglass = forwardRef<SVGSVGElement, HourglassProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M6.5 2h11v4L12 10 6.5 6zm0 20h11v-4L12 14l-5.5 4z"/><path d="M6.5 2h11v4L12 10 6.5 6z"/><path d="M6.5 22h11v-4L12 14l-5.5 4z"/>
    </svg>
  )
)

Hourglass.displayName = 'Hourglass'

export { Hourglass }
export type { HourglassProps }
