import { forwardRef } from 'react'

interface BikeProps extends React.SVGProps<SVGSVGElement> {}

const Bike = forwardRef<SVGSVGElement, BikeProps>(
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
      <circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M12 17 9 9l6-4"/><path d="m15 5 4 12"/><path d="M5.5 17.5 9 9"/><path d="M9 9h5"/>
    </svg>
  )
)

Bike.displayName = 'Bike'

export { Bike }
export type { BikeProps }
