import { forwardRef } from 'react'

interface PlayProps extends React.SVGProps<SVGSVGElement> {}

const Play = forwardRef<SVGSVGElement, PlayProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m5 3 14 9-14 9z"/><path d="m5 3 14 9-14 9z"/>
    </svg>
  )
)

Play.displayName = 'Play'

export { Play }
export type { PlayProps }
