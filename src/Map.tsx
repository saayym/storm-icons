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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z"/><path d="M8 2v16"/><path d="M16 6v16"/>
    </svg>
  )
)

Map.displayName = 'Map'

export { Map }
export type { MapProps }
