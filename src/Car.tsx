import { forwardRef } from 'react'

interface CarProps extends React.SVGProps<SVGSVGElement> {}

const Car = forwardRef<SVGSVGElement, CarProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M5 17h14l1-5H4z"/><path d="M19 17H5l-2-6h18z"/><path d="M14 17h4V9.2a2 2 0 0 0-.6-1.4L14 5h-4L6.6 7.8A2 2 0 0 0 6 9.2V17h4"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/>
    </svg>
  )
)

Car.displayName = 'Car'

export { Car }
export type { CarProps }
