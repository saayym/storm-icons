import { forwardRef } from 'react'

interface CompassDrawingProps extends React.SVGProps<SVGSVGElement> {}

const CompassDrawing = forwardRef<SVGSVGElement, CompassDrawingProps>(
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
      <circle cx="12" cy="5" r="2" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="5" r="2"/><path d="m6 21 6-14 6 14"/><path d="M9 14h6"/>
    </svg>
  )
)

CompassDrawing.displayName = 'CompassDrawing'

export { CompassDrawing }
export type { CompassDrawingProps }
