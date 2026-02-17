import { forwardRef } from 'react'

interface MapProps extends React.SVGProps<SVGSVGElement> {}

const Map = forwardRef<SVGSVGElement, MapProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m1 6 8-3 6 3 8-3v16l-8 3-6-3-8 3z"/><path d="m1 6 8-3 6 3 8-3v16l-8 3-6-3-8 3z"/><path d="M9 3v16"/><path d="M15 6v16"/>
    </svg>
  )
)

Map.displayName = 'Map'

export { Map }
export type { MapProps }
