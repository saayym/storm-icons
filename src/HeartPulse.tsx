import { forwardRef } from 'react'

interface HeartPulseProps extends React.SVGProps<SVGSVGElement> {}

const HeartPulse = forwardRef<SVGSVGElement, HeartPulseProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 0 1 12 5.006a5 5 0 0 1 7.5 7.566"/><path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 0 1 12 5.006a5 5 0 0 1 7.5 7.566"/><path d="M4 12h4l2-4 4 8 2-4h4"/>
    </svg>
  )
)

HeartPulse.displayName = 'HeartPulse'

export { HeartPulse }
export type { HeartPulseProps }
