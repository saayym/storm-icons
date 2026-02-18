import { forwardRef } from 'react'

interface MapPinProps extends React.SVGProps<SVGSVGElement> {}

const MapPin = forwardRef<SVGSVGElement, MapPinProps>(
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
      <path d="M12 21S5 13.5 5 9a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  )
)

MapPin.displayName = 'MapPin'

export { MapPin }
export type { MapPinProps }
