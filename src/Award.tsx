import { forwardRef } from 'react'

interface AwardProps extends React.SVGProps<SVGSVGElement> {}

const Award = forwardRef<SVGSVGElement, AwardProps>(
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
      <circle cx="12" cy="8" r="7" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>
    </svg>
  )
)

Award.displayName = 'Award'

export { Award }
export type { AwardProps }
