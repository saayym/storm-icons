import { forwardRef } from 'react'

interface LandmarkProps extends React.SVGProps<SVGSVGElement> {}

const Landmark = forwardRef<SVGSVGElement, LandmarkProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M3 22V11h18v11z"/><path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="m12 2 8 5H4z"/>
    </svg>
  )
)

Landmark.displayName = 'Landmark'

export { Landmark }
export type { LandmarkProps }
