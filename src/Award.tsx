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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9"/><path d="m12 15 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889"/><path d="m6.802 12-3.4 5.89L7 17.657l1.598 3.232 3.4-5.889"/>
    </svg>
  )
)

Award.displayName = 'Award'

export { Award }
export type { AwardProps }
