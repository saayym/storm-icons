import { forwardRef } from 'react'

interface ZoomInProps extends React.SVGProps<SVGSVGElement> {}

const ZoomIn = forwardRef<SVGSVGElement, ZoomInProps>(
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
      <circle cx="11" cy="11" r="8" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/>
    </svg>
  )
)

ZoomIn.displayName = 'ZoomIn'

export { ZoomIn }
export type { ZoomInProps }
