import { forwardRef } from 'react'

interface HelpCircleProps extends React.SVGProps<SVGSVGElement> {}

const HelpCircle = forwardRef<SVGSVGElement, HelpCircleProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
    </svg>
  )
)

HelpCircle.displayName = 'HelpCircle'

export { HelpCircle }
export type { HelpCircleProps }
