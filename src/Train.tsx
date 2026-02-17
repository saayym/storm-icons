import { forwardRef } from 'react'

interface TrainProps extends React.SVGProps<SVGSVGElement> {}

const Train = forwardRef<SVGSVGElement, TrainProps>(
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
      <rect x="4" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/><path d="m8 19-3 3"/><path d="m16 19 3 3"/>
    </svg>
  )
)

Train.displayName = 'Train'

export { Train }
export type { TrainProps }
