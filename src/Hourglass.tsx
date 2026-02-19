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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M5 2h14"/><path d="M5 22h14"/><path d="M7 2v4l5 6-5 6v4"/><path d="M17 2v4l-5 6 5 6v4"/>
    </svg>
  )
)

Hourglass.displayName = 'Hourglass'

export { Hourglass }
export type { HourglassProps }
